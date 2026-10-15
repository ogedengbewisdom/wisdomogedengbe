export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  qualification: string;
  result: string;
};

export const experience: Experience[] = [
  {
    company: "Seamfix Developer Program",
    role: "Full-stack Developer · Asset Tracking Management System",
    period: "May 2026 – July 2026",
    highlights: [
      "Built 15 screens, including 5 role-specific dashboards, from Figma designs on a 3-person team, and wrote 80% of the backend unit tests across a 13-table PostgreSQL schema.",
      "Designed a system-wide audit log covering asset movement, user logins, and admin-created users and assets, with location-scoped visibility so each branch sees only its own activity. Built the matching frontend views with server-side pagination.",
      "Built bulk upload for users and assets from downloadable Excel templates, handling 70+ records in a single upload and removing manual data entry for onboarding. Each upload creates the records and sends email notifications.",
      "Added real-time notifications over WebSockets, with live UI updates using BehaviorSubject and Angular Signals.",
      "Improved frontend performance with route-level preloading, code splitting, and OnPush change detection.",
    ],
  },
  {
    company: "Voltnet",
    role: "Backend Developer",
    period: "November 2025 – March 2026",
    highlights: [
      "Designed a 10+ table PostgreSQL schema covering users, wallets, referrals, payments, and orders, using enum constraints and indexed queries for reliable transaction tracking.",
      "Implemented JWT authentication with four role levels, so users see only their own transactions while admins and super admins handle disputes and refunds.",
      "Built a Paystack payment integration for wallet funding and order fulfillment, processing over ₦1M across 63 beta users, with a cron job that reconciles abandoned payments every 30 minutes.",
      "Fixed a webhook race condition that could double-charge users, using an idempotency check on a UUID header plus a unique constraint on payment references (insert on conflict do nothing).",
      "Integrated two vendor APIs (ClubKonnect and Ebills) and routed each order automatically to the cheaper vendor.",
    ],
  },
  {
    company: "E-swift",
    role: "Full-stack Developer",
    period: "August 2024 – October 2025",
    highlights: [
      "Built a real estate management app with Next.js, Express.js, and MongoDB, used to manage about 40 properties at launch (land, completed houses, and unfinished houses).",
      "Added search filters, pagination, and an application form so customers could apply for affordable housing, while admins tracked properties and coordinated staff.",
      "Used Next.js Server Components by default and Client Components only for interactive parts, to keep listing pages SEO-friendly.",
      "Set up authentication and role-based access control (Passport, JWT) across the backend and frontend.",
      "Moved file storage from a Railway volume that was running out of space to the company's Google Drive, avoiding the cost of extra volume storage.",
      "Set up company-domain email on Zoho's free plan for a team of 5, avoiding paid Google Workspace seats (from $7 per user per month).",
    ],
  },
  {
    company: "PocketFood",
    role: "Frontend Developer",
    period: "January 2024 – August 2024",
    highlights: [
      "Revamped the landing page using Next.js, attracting 650+ sign-ups on launch day.",
      "Built a React vendor dashboard with Google Maps integration, making order management easier for vendors and reducing customer delivery questions by 20%.",
      "Built a location tracking system using query parameters that prompts users and vendors to share their current location when placing or accepting orders, enabling automatic distance calculation and delivery time estimates.",
      "Improved app performance through code splitting, React optimizations, lazy loading, and data caching, making pages load 25% faster.",
    ],
  },
];

export const education: Education = {
  institution: "Kogi State University, Anyigba",
  qualification: "BSc Biochemistry",
  result: "Second Class Upper",
};

export const certifications: string[] = [
  "React – The Complete Guide – Udemy (2025)",
  "Seamfix Full-Stack Developer Program (2026)",
];
