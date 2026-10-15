import type { Metadata } from "next";
import NetworkStatus from "./network-status";
import "./globals.css";

// TODO: Set NEXT_PUBLIC_SITE_URL to the final public site URL before publishing.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImage = "/wisdom_ogedengbe.png";
const description =
  "Wisdom Ogedengbe is a full-stack developer building with NestJS, TypeORM, PostgreSQL, Angular, PrimeNG, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Wisdom Ogedengbe | Full-stack Developer",
    template: "%s | Wisdom Ogedengbe",
  },
  description,
  keywords: [
    "Wisdom Ogedengbe",
    "Full-stack Developer",
    "NestJS",
    "TypeORM",
    "PostgreSQL",
    "Angular",
    "PrimeNG",
    "TypeScript",
    "React",
    "NextJS",
    "Tailwind CSS",
    "Chakra UI",
    "Material UI",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Jest",
    "Postman",
    "Insomnia",
    "Swagger",
    "Git",
    "Figma",
    "RxJS",
    "Chart.js",
    "Google Maps",
  ],
  authors: [{ name: "Wisdom Ogedengbe" }],
  openGraph: {
    type: "website",
    title: "Wisdom Ogedengbe | Full-stack Developer",
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "Wisdom Ogedengbe",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Wisdom Ogedengbe | Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Ogedengbe | Full-stack Developer",
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let letterIndex = 0;
  const nameLetters = "WISDOM OGEDENGBE".split("").map((character, index) => {
    const isLetter = character !== " ";
    const animationDelay = isLetter
      ? { animationDelay: `${letterIndex++ * 43}ms` }
      : undefined;

    return (
      <span
        className={isLetter ? "name-loader-letter" : "name-loader-space"}
        key={`${character}-${index}`}
        style={animationDelay}
      >
        {character}
      </span>
    );
  });

  return (
    <html lang="en" data-theme="dark">
      <body>
        <div aria-hidden="true" className="name-loader">
          <div className="name-loader-content">
            <div className="name-loader-name">
              {nameLetters}
              <span className="name-loader-glitch name-loader-glitch-top">
                WISDOM OGEDENGBE
              </span>
              <span className="name-loader-glitch name-loader-glitch-bottom">
                WISDOM OGEDENGBE
              </span>
            </div>
            <span className="name-loader-accent" />
          </div>
        </div>
        {children}
        <NetworkStatus />
      </body>
    </html>
  );
}
