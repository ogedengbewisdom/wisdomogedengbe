"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState("error");

    // try {
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       name: formData.get("name"),
    //       email: formData.get("email"),
    //       message: formData.get("message"),
    //       website: formData.get("website"),
    //     }),
    //   });

    //   if (!response.ok) {
    //     setFormState("error");
    //     return;
    //   }

    //   form.reset();
    //   setFormState("success");
    // } catch {
    //   setFormState("error");
    // }
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="contact-honeypot">
        <label htmlFor="contact-website">Website</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>
      <div className="contact-form-fields">
        <label className="contact-field">
          <span>Name</span>
          <input
            autoComplete="name"
            maxLength={100}
            minLength={2}
            name="name"
            required
            type="text"
          />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input
            autoComplete="email"
            maxLength={254}
            name="email"
            required
            type="email"
          />
        </label>
        <label className="contact-field contact-field-message">
          <span>Message</span>
          <textarea
            maxLength={5000}
            minLength={10}
            name="message"
            placeholder="What are you building?"
            required
            rows={6}
          />
        </label>
      </div>
      <button
        className="button button-primary contact-submit"
        disabled={formState === "sending"}
        type="submit"
      >
        {formState === "sending" ? "Sending..." : "Send message"}
      </button>
      <p
        aria-live="polite"
        className={`contact-form-status contact-form-status-${formState}`}
        role={formState === "error" ? "alert" : "status"}
      >
        {formState === "success" &&
          "Thanks for reaching out. Your message has been sent."}
        {formState === "error" &&
          "Your message could not be sent. Please try again or email me directly."}
      </p>
    </form>
  );
}
