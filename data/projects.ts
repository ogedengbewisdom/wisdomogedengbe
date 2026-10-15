export type ProjectCaseStudy = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  timeframe: string;
  technologies: string[];
  image?: {
    slug: string;
    alt: string;
  };
  problem: string;
  contribution: string;
  technicalDecisions: string[];
  challenges: string[];
  tradeoffs: string[];
  outcome: string;
  reflection: string;
  liveProjectUrl: string | null;
  sourceCodeUrl: string | null;
};

export const projects: ProjectCaseStudy[] = [
  {
    id: "atms",
    name: "ATMS",
    category: "Asset management",
    description:
      "Enterprise Asset Tracking Management System built during the Seamfix Developer Program.",
    role: "Full-stack Developer, Seamfix Developer Program",
    timeframe: "May 2026 – July 2026",
    technologies: [
      "Angular",
      "PrimeNG",
      "TypeScript",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "WebSockets",
      "Angular Signals",
      "RxJS",
      "Chart.js",
    ],
    image: {
      slug: "atm",
      alt: "ATMS dashboard showing asset movement and user activity.",
    },
    problem:
      "Organizations needed to track assets across branches, keep activity visible only to the right locations, and remove the manual data entry involved in onboarding users and assets.",
    contribution:
      "Built 15 screens, including 5 role-specific dashboards, from Figma designs on a 3-person team, and wrote 80% of the backend unit tests across a 13-table PostgreSQL schema.",
    technicalDecisions: [
      "Designed a system-wide audit log covering asset movement, user logins, and admin-created users and assets, with location-scoped visibility so each branch sees only its own activity.",
      "Built the matching frontend audit views with server-side pagination.",
      "Built bulk upload for users and assets from downloadable Excel templates; each upload creates the records and sends email notifications.",
      "Delivered real-time notifications over WebSockets, with live UI updates using BehaviorSubject and Angular Signals.",
    ],
    challenges: [
      "Keeping the interface in sync with real-time events, so notifications update the UI live without a page refresh.",
      "Handling 70+ records in a single bulk upload while creating each record and sending its email notification.",
      "Keeping the frontend fast across 15 screens with route-level preloading, code splitting, and OnPush change detection.",
    ],
    tradeoffs: [
      "Used server-side pagination for audit-log views instead of loading full activity histories into the browser.",
      "Scoped audit visibility by location so each branch sees only its own activity, rather than one global log for everyone.",
    ],
    outcome:
      "Delivered 15 screens including 5 role-specific dashboards, removed manual onboarding data entry with bulk upload of 70+ records at a time, and wrote 80% of the backend unit tests across a 13-table PostgreSQL schema.",
    reflection:
      "Reliable asset tracking depends on consistent state, clear role-specific workflows, and an audit trail teams can trust.",
    liveProjectUrl: null,
    sourceCodeUrl: null,
  },
  {
    id: "voltnet-payments",
    name: "Voltnet payments backend",
    category: "Payments / backend",
    description:
      "Paystack-powered wallet funding and order fulfillment backend with vendor routing.",
    role: "Backend Developer, Voltnet",
    timeframe: "November 2025 – March 2026",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Paystack",
      "node-cron",
    ],
    image: {
      slug: "voltnet",
      alt: "Voltnet payments transactions showing wallet funding and order fulfillment.",
    },
    problem:
      "Users needed reliable wallet funding and order fulfillment, while abandoned transactions and duplicate webhook deliveries could leave payments pending or charge users twice.",
    contribution:
      "Designed a 10+ table PostgreSQL schema, implemented JWT authentication with four role levels, built Paystack wallet funding and order fulfillment, and integrated two vendor APIs.",
    technicalDecisions: [
      "Designed a schema covering users, wallets, referrals, payments, and orders, using enum constraints and indexed queries for reliable transaction tracking.",
      "Checked an idempotency UUID header and added a unique constraint on payment references, using insert-on-conflict-do-nothing for webhook events.",
      "Ran a cron job that reconciles abandoned payments every 30 minutes.",
      "Integrated ClubKonnect and Ebills, routing each order automatically to the cheaper vendor.",
    ],
    challenges: [
      "Fixed a webhook race condition that could double-charge users.",
      "Corrected webhook signature verification ordering and stopped responses from completing before database writes finished.",
      "Scoped transaction access across four role levels, so users see only their own transactions while admins and super admins handle disputes and refunds.",
    ],
    tradeoffs: [
      "Used both request-level idempotency and a database uniqueness constraint, protecting against duplicates at the request and persistence layers.",
      "Scheduled periodic reconciliation to recover abandoned payments rather than relying only on a later webhook delivery.",
    ],
    outcome:
      "Processed over ₦1M across 63 beta users, with duplicate webhooks handled safely and abandoned payments reconciled every 30 minutes.",
    reflection:
      "Payment reliability depends on handling retries and concurrency explicitly, with safeguards at both the API and database layers.",
    liveProjectUrl: "https://assettracker-elr2.onrender.com",
    sourceCodeUrl: null,
  },
  {
    id: "sj-ultra",
    name: "SJ Ultra",
    category: "Corporate website / Cybersecurity",
    description:
      "Marketing website for SJ Ultra, a San Jose, California cybersecurity consulting firm with worldwide reach, covering its assessment, implementation, and operations services, partners, and blog.",
    role: "Frontend Developer",
    timeframe: "February 2025 – March 2025",
    technologies: ["Next.js"],
    image: {
      slug: "sjultra",
      alt: "SJ Ultra marketing website.",
    },
    problem:
      "A cybersecurity consulting firm needed its landing page and key screens rebuilt, with search visibility as a priority.",
    contribution:
      "Rebuilt the landing page and several other screens in Next.js, with a focus on SEO.",
    technicalDecisions: [
      "Built the pages in Next.js with SEO as the main goal.",
    ],
    challenges: [],
    tradeoffs: [],
    outcome: "Live in production at sjultra.com.",
    reflection: "",
    liveProjectUrl: "https://www.sjultra.com/",
    sourceCodeUrl: null,
  },
  {
    id: "e-swift-real-estate",
    name: "E-swift real-estate platform",
    category: "Real estate / full-stack",
    description:
      "Real-estate management app for tracking properties, coordinating staff, and taking affordable housing applications.",
    role: "Full-stack Developer, E-swift",
    timeframe: "August 2024 – October 2025",
    technologies: ["Next.js", "Express.js", "MongoDB", "Passport", "JWT"],
    image: {
      slug: "eswift",
      alt: "E-swift real-estate platform.",
    },

    problem:
      "Admin teams needed a way to track properties and coordinate staff, while customers needed to search for properties and apply for affordable housing.",
    contribution:
      "Built a real estate management app with Next.js, Express.js, and MongoDB, with search filters, pagination, an application form, and authentication with role-based access control.",
    technicalDecisions: [
      "Used Next.js Server Components by default and Client Components only for interactive parts, to keep listing pages SEO-friendly.",
      "Set up authentication and role-based access control with Passport and JWT across the backend and frontend.",
      "Moved file storage (images and PNGs) from a Railway volume that was running out of space to the company's Google Drive.",
      "Set up company-domain email on Zoho's free plan for a team of 5.",
    ],
    challenges: [
      "Balancing SEO-friendly server-rendered listing pages with interactive client components.",
      "Keeping role-based permissions consistent across the backend and frontend.",
      "Fixing file storage when the Railway volume was running out of space.",
    ],
    tradeoffs: [
      "Kept most components server-rendered and limited Client Components to interactive features.",
      "Moved files to Google Drive instead of paying for extra volume storage.",
      "Chose Zoho's free plan over paid Google Workspace seats (from $7 per user per month).",
    ],
    outcome:
      "Used to manage about 40 properties at launch (land, completed houses, and unfinished houses), while avoiding extra storage costs and paid email seats for a team of 5.",
    reflection:
      "Keeping interactive client code focused while rendering the rest on the server helped balance user-facing behavior with SEO.",
    liveProjectUrl: null,
    sourceCodeUrl: null,
  },
  {
    id: "pocketfood",
    name: "PocketFood",
    category: "Food delivery / frontend",
    description:
      "Food-delivery experience with a vendor dashboard, location-aware ordering, and delivery estimates.",
    role: "Frontend Developer, PocketFood",
    timeframe: "January 2024 – August 2024",
    technologies: ["Next.js", "React", "Google Maps"],
    image: {
      slug: "pocketfood",
      alt: "PocketFood app interface.",
    },
    problem:
      "Customers and vendors needed clearer order management and location-aware delivery estimates.",
    contribution:
      "Revamped the landing page with Next.js, built a React vendor dashboard with Google Maps, and built the location-sharing flow for users and vendors.",
    technicalDecisions: [
      "Used query parameters to prompt users and vendors to share their current location when placing or accepting orders.",
      "Calculated delivery distance and estimated delivery time automatically from the shared locations.",
      "Improved performance with code splitting, React optimizations, lazy loading, and data caching.",
    ],
    challenges: [
      "Making order management easier for vendors with a map-enabled dashboard.",
      "Reducing customer questions by showing location-based distance and delivery-time estimates.",
      "Improving page load times without sacrificing the ordering experience.",
    ],
    tradeoffs: [
      "Requested location at order placement or acceptance to enable distance and delivery-time estimates.",
      "Used code splitting, lazy loading, and caching to improve load speed while keeping the existing application experience.",
    ],
    outcome:
      "The landing page attracted 650+ sign-ups on launch day, the vendor dashboard reduced delivery questions by 20%, and performance work made pages load 25% faster.",
    reflection:
      "Location context can reduce uncertainty for both sides of an order when it is connected directly to delivery estimates.",
    liveProjectUrl: "https://www.pocketfood.io/",
    sourceCodeUrl: null,
  },
  {
    id: "sungas",
    name: "SunGas",
    category: "Corporate website / Oil & gas",
    description:
      "Corporate website for Sun&Sun Oil and Gas Nig Ltd, an oil and gas fabrication, welding, and installation company in Uyo, Akwa Ibom, with services, projects, quote requests, and WhatsApp chat.",
    role: "Frontend Developer",
    timeframe: "October 2024",
    technologies: ["React", "Netlify"],
    image: {
      slug: "sungas",
      alt: "SunGas corporate website.",
    },
    problem:
      "An oil and gas welding, fabrication, and installation company needed a professional website to present its services and projects and let prospective clients request quotes.",
    contribution:
      "Built all the frontend screens in React, from the hero slider and services sections to the request-a-quote form, testimonials, and footer, then deployed the app on Netlify.",
    technicalDecisions: [
      "Built the full interface in React as a single-page app and deployed it on Netlify.",
      "Optimized the finished app for faster loading and smoother use.",
    ],
    challenges: [
      "After deploying to Netlify, the site opened normally but showed a blank page when reloaded. This was a client-side routing problem, which I resolved so every route loads correctly on refresh.",
    ],
    tradeoffs: [
      "Chose a React single-page app for a mostly content-based company site: fast navigation and a quick build, at the cost of extra hosting configuration for routing and weaker built-in SEO than a server-rendered site.",
    ],
    outcome:
      "Live in production at sungas.ng, presenting the company's fabrication, welding, and installation services.",
    reflection:
      "A site that works on localhost can still break in production. After the blank-page-on-reload bug, I test page refreshes and direct links on every deployment.",
    liveProjectUrl: "https://sungas.ng/",
    sourceCodeUrl: null,
  },
];
