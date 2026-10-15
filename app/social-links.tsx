import { whatsappHref } from "@/data/contact";

type SocialNetwork = "github" | "linkedin" | "x";

const socialLinks: {
  label: string;
  href: string;
  network: SocialNetwork;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/ogedengbewisdom",
    network: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wisdom-ogedengbe-a5241320a/",
    network: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/OnimisiWisdom",
    network: "x",
  },
];

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (network === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.01h2.97v9.33ZM6.45 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.9 10.6h-2.96v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.2V9.01h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.97 3.55 4.53v5.04Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.56 22H2.43l7.25-8.29L1.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.29 3.9H5.44L17.8 20Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64a11.9 11.9 0 0 0 5.8 1.48h.01C18.63 23.84 24 18.49 24 11.91c0-3.18-1.24-6.17-3.48-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.9-9.92a9.84 9.84 0 0 1 7.02 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.66-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.08 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

export function WhatsAppLink({
  className,
  iconOnly = false,
}: {
  className: string;
  iconOnly?: boolean;
}) {
  return (
    <a
      aria-label="Chat with Wisdom on WhatsApp"
      className={className}
      href={whatsappHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon />
      {!iconOnly && <span>WhatsApp</span>}
    </a>
  );
}

export function SocialLinks({
  className,
  iconOnly = false,
}: {
  className: string;
  iconOnly?: boolean;
}) {
  return (
    <nav aria-label="Social links" className={className}>
      {socialLinks.map(({ label, href, network }) => (
        <a
          aria-label={iconOnly ? label : undefined}
          href={href}
          key={network}
          rel="noreferrer"
          target="_blank"
        >
          <SocialIcon network={network} />
          {!iconOnly && <span>{label}</span>}
        </a>
      ))}
    </nav>
  );
}
