import { env } from "cloudflare:workers";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseContactPayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) return null;

  const { name, email, message, website } = value;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    (website !== undefined && typeof website !== "string")
  ) {
    return null;
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();
  const normalizedWebsite = typeof website === "string" ? website.trim() : "";

  if (
    normalizedName.length < 2 ||
    normalizedName.length > MAX_NAME_LENGTH ||
    /[\r\n]/.test(normalizedName) ||
    normalizedEmail.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(normalizedEmail) ||
    normalizedMessage.length < MIN_MESSAGE_LENGTH ||
    normalizedMessage.length > MAX_MESSAGE_LENGTH ||
    normalizedWebsite.length > 200
  ) {
    return null;
  }

  return {
    name: normalizedName,
    email: normalizedEmail,
    message: normalizedMessage,
    website: normalizedWebsite,
  };
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Expected a JSON request." }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const contact = parseContactPayload(body);
  if (!contact) {
    return Response.json(
      { error: "Please check your name, email, and message." },
      { status: 400 },
    );
  }

  if (contact.website) {
    return Response.json({ ok: true });
  }

  const apiKey = env.RESEND_API_KEY;
  const from = env.CONTACT_FROM_EMAIL;
  const to = env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form email configuration is incomplete.");
    return Response.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: contact.email,
        subject: `Portfolio contact from ${contact.name}`,
        text: `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
      }),
    });
  } catch (error) {
    console.error("Contact form email request failed.", error);
    return Response.json(
      { error: "Your message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    const providerError = await resendResponse.text();
    console.error("Resend rejected the contact form email.", {
      status: resendResponse.status,
      error: providerError,
    });
    return Response.json(
      { error: "Your message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
