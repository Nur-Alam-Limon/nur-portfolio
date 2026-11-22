export const profile = {
  name: "Nur Alam Chowdhury",
  role: "Senior Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "nuralam201425@gmail.com",
  phone: "+8801764869750",
  phoneDisplay: "+880 1764-869750",
  github: "https://github.com/Nur-Alam-Limon",
  githubUser: "Nur-Alam-Limon",
  linkedin: "https://www.linkedin.com/in/nur-alam04/",
  medium: "https://medium.com/@nuralam201425",
  resume: "/Nur_Alam_Chowdhury_SWE.pdf",
  experienceStart: "2021-12-01",
};

export function yearsPlus(iso = profile.experienceStart) {
  const years =
    (Date.now() - new Date(iso).getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.max(1, Math.round(years));
}

export const experience = [
  {
    name: "Bevy Commerce",
    position: "Software Engineer",
    from: "Dec 2021",
    to: "Present",
    note: "Remote, Canada. Frontend from December 2021, full stack since March 2023. Lead engineer across the commerce portfolio.",
    stacks: ["React", "Next.js", "Remix", "Node.js", "MongoDB", "PostgreSQL", "Redis", "Shopify"],
    points: [
      "Lead Share Cart, Bevy’s Shopify App Store app. Shoppers share a cart by link. Merchants see visitors, orders, and revenue. About 413 commits across storefront, admin, billing, and analytics.",
      "Share Cart security review is closed. Server Firestore moved to Firebase Admin. OAuth callbacks use HMAC and signed state. Public routes no longer return PII. Theme XSS sinks are fixed. Privacy webhooks deliver.",
      "Share Cart storefront performance passed Built for Shopify. Mobile Lighthouse is 83.6 with the app on. The score is 3.7 points under the same store with the app off. Shopify allows a 10-point drop, so the app is inside the limit. Empty-cart scripts are deferred and unused CDNs are gone.",
      "Share, open, and checkout calls stay inside a 30-second limit. Admin API retries are bounded. Large carts are split across metafields so a big share does not time out.",
      "Lead Sales & Pricing Rules, about 300 commits. Bulk price changes, storewide sales, quantity breaks, and a sales-clock theme extension. Redis keeps sync under load. Shopify webhooks, Sentry, and Cypress CI cover the release path. Stack is Next.js, Node, MongoDB, and Redis.",
      "Lead the Light Bulb Depot Shopify cutover. 659 products, 13 warehouses, about 1.94 million inventory units, about 1,500 media files, mapped from roughly 24,800 legacy items. Images, PDFs, tags, and metafields go through bulk Admin GraphQL, with CSV checks after the run.",
      "Lead COOP-BI, about 90 commits. Shopify, Klaviyo campaigns, and site traffic land in PostgreSQL for Power BI. The pipeline covers ShopifyQL, flow and campaign conversion, traffic channels, and PDF intake.",
      "Lead membership discounts on Shopify Functions. Member and non-member prices, campaign stacking, and metafield banners. Nearly the sole author of that app.",
      "Lead Shopify to QuickBooks Desktop sync on AWS SQS. Products, customers, orders, and inventory, with settings and logs in a Remix admin. About 67 commits on the integration.",
      "Lead Bevy’s careers portal on Horilla. Public job pages, screening questions, applications, interview status, and employee login. Docker staging for the HR portal. This is a customization of the open-source app.",
      "Earlier lead work: the push-notification service, about 421 commits, on Next.js, Koa, Redis, and Firebase. Machine checkout timers and upsell, about 82 commits. A Typesense search admin slice. SS Activewear catalog sync. Marketing-site mobile work that defers non-critical scripts and loads analytics and reCAPTCHA only after a visitor interacts.",
    ],
  },
  {
    name: "Jobsyo",
    position: "Co-Founder and Software Engineer",
    from: "Sep 2025",
    to: "Present",
    note: "Side product alongside Bevy. Pre-revenue.",
    stacks: ["Next.js", "NestJS", "MongoDB", "Redis", "Gemini"],
    points: [
      "Led engineering for payments, subscriptions, session auth, billing, and admin analytics around the AI matching product.",
      "Last 90 days, November 2026: 6,433 users, 62,976 visitors, 4,574 resumes uploaded, 70 active jobs, and 3,670 apply clicks.",
    ],
  },
  {
    name: "RiseUp Labs",
    position: "Contract Senior Shopify Developer",
    from: "Nov 2025",
    to: "Apr 2026",
    note: "Contract alongside Bevy. Senior Shopify Developer.",
    stacks: ["Remix", "React", "MongoDB", "Heroku"],
    points: [
      "Led American Nautical Services’ chart catalog. Nearly the sole author: map search, UKHO XML import, RTZ route detection, paper-chart purchase, and digital quotes.",
      "Cut GeoJSON and cart latency on dense chart libraries and handled overlapping and unmatched charts.",
    ],
  },
  {
    name: "Independent",
    position: "Software Engineer",
    from: "2024",
    to: "2025",
    note: "Upwork and direct clients.",
    stacks: ["Remix", "Prisma", "PostgreSQL"],
    points: [
      "Green Wallet: a checkout extension that turns a token quantity into a percent discount, with no custom theme.",
      "Consumed, via Upwork: partner-discount analytics on Prisma and Postgres so the client could read campaign results instead of raw events.",
    ],
  },
  {
    name: "KnotByte",
    position: "Frontend Developer",
    from: "Jan 2021",
    to: "Sep 2021",
    note: "Rajshahi. Frontend and graphic design.",
    stacks: ["React", "Figma", "Illustrator"],
    points: [
      "Turned Figma screens into React UI.",
      "Logos, business cards, and the company’s brand work, alongside the frontend.",
    ],
  },
  {
    name: "TEDxRUET",
    position: "Graphic Designer",
    from: "Jun 2018",
    to: "Jun 2019",
    note: "Volunteer design for the university TEDx event.",
    stacks: ["Illustrator", "Photoshop", "Figma"],
    points: [
      "Publicity banners and posters, the event website design, and print for tickets, mugs, and t-shirts.",
      "Helped organize the event and keep the visual system consistent for a live audience, a year before the first software job.",
    ],
  },
];

export const learning = [
  {
    name: "Phitron — AI and machine learning",
    when: "Completed",
    href: "https://phitron.io/ai-ml-course",
    detail:
      "Python for data work, NumPy, Pandas, Matplotlib, Seaborn, cleaning and EDA, Colab and Kaggle, then classical machine learning, deep learning, and getting a model out of a notebook.",
  },
  {
    name: "Phitron",
    when: "Completed",
    href: "https://phitron.io/",
    detail:
      "The programming base under the later work: C, C++, data structures, algorithms, and the habit of solving the problem before reaching for a framework.",
  },
  {
    name: "Programming Hero — full-stack web",
    when: "Completed",
    href: "https://web.programming-hero.com/course-details",
    detail:
      "HTML, CSS, Tailwind, JavaScript and ES6, TypeScript, React, Next.js, Node, Express, MongoDB, Mongoose, Git, authentication, and an AI-assisted way of building.",
  },
  {
    name: "freeCodeCamp — Responsive Web Design",
    when: "June 2021",
    href: "https://www.freecodecamp.org/certification/nur_alam/responsive-web-design",
    detail:
      "Semantic HTML, forms, accessibility, Flexbox, Grid, and responsive layout. The certificate is public.",
  },
  {
    name: "Learn With Hasin Hayder — Mastering Agentic Coding",
    when: "Completed",
    href: "https://lwhh.org/courses/mastering-agentic-coding",
    detail:
      "How an agent harness works: context, skills, sub-agents, MCP, AGENTS.md, token cost, and using the agent for Git instead of fighting the terminal.",
  },
  {
    name: "Instructory — Graphic design",
    when: "Completed",
    href: "https://instructory.net/courses/graphic-design-a-complete-course",
    detail:
      "A full design course beside the client and TEDx work: layout, type, color, and the tools behind posters, logos, and interface frames.",
  },
];

export const highlights = [
  {
    title: "TEDxRUET",
    text: "A year as the graphic designer. Banners, the event site, tickets, and merchandise for a live audience.",
    href: "/about#experience",
  },
  {
    title: "freeCodeCamp",
    text: "Responsive Web Design certificate, June 2021. HTML, CSS, and layouts that hold up on a phone.",
    href: "https://www.freecodecamp.org/certification/nur_alam/responsive-web-design",
  },
  {
    title: "Sakinah",
    text: "Built for my own notebook problem. Goals, a brain dump, habits, prayer times, and an AI plan. Live as a PWA, and written up on LinkedIn.",
    href: "https://sakinah-life.vercel.app/",
    post: "https://lnkd.in/p/gKKymsFj",
  },
];

export const recommendations = [
  {
    name: "Sakib Ashraf",
    role: "Team Lead, Software Engineering, Bevy Commerce",
    when: "October 2026",
    relation: "Worked on the same team",
    pull: "He’s someone I can confidently rely on when it comes to taking on challenging work.",
    quote:
      "I’ve had the pleasure of working with Nur Alam, and he’s someone I can confidently rely on when it comes to taking on challenging work. He genuinely enjoys tackling complex problems and is always willing to take ownership when things get difficult. What stands out most is his sense of responsibility and dependability. He’s a great team player, but he’s also capable of taking a project and driving it independently from start to finish when needed. He learns quickly, asks the right questions, and is genuinely eager to learn and take on new challenges. Nur is the kind of person you can trust with difficult work knowing that he’ll take ownership and see it through. I’d be happy to work with him again and would recommend him to any team looking for a reliable, capable, and growth-oriented professional.",
  },
  {
    name: "Farah Idid Nibir",
    role: "Senior Software Engineer, Bevy Commerce",
    when: "May 2025",
    relation: "Worked on the same team",
    pull: "He consistently delivers high-quality code.",
    quote:
      "I had the pleasure of working with Nur Alam Chowdhury on a recent project, and I was genuinely impressed by his ability to quickly grasp a complex codebase and start contributing with confidence. His strong foundation in modern web technologies and full-stack development was evident from the start, and his work ethic and problem-solving approach made a real impact on the project's progress. Nur Alam brings a rare combination of technical proficiency, adaptability, and dedication. Whether it's front-end development with React or diving into backend logic with Node or Nest.js, he consistently delivers high-quality code. His experience in developing Shopify apps and his contributions to both sides of the stack at Bevy Commerce speak volumes about his capabilities. Beyond his technical skills, he's also a great communicator and a reliable team player. I highly recommend Nur Alam to any team looking for a passionate and skilled software engineer who can hit the ground running and deliver results.",
  },
  {
    name: "MD. ATIQUR RAHMAN",
    role: "Software Engineer, MERN",
    when: "November 2023",
    relation: "Shopify POS app team",
    pull: "He is very good in the MERN stack and has sound knowledge in Shopify.",
    quote:
      "We both worked in the Shopify POS app team. During this period I found him very friendly and helpful. He is very good in the MERN stack development and has sound knowledge in Shopify. He owns a good leadership skill as well.",
  },
  {
    name: "MD. Rezowanur Rahman Robin",
    role: "Full Stack Engineer",
    when: "November 2023",
    relation: "Worked on the same team",
    quote:
      "Nur Alam is an exceptionally talented and technically proficient individual. He possesses a remarkable ability to learn quickly and consistently exceeds his own capabilities. His calm demeanor and helpful nature make him an invaluable colleague, and I believe he would make an excellent partner. I wholeheartedly recommend him.",
  },
  {
    name: "Golam Rabbi",
    role: "University classmate, RUET",
    when: "November 2023",
    relation: "Studied together, saw the KnotByte work",
    quote:
      "Nur is my university friend. He is a very talented and hardworking person. I've seen his work and dedication to work very closely when he worked for KnotByte. He carries a positive attitude to new challenges. He is highly skilled in front end and a very good team player. He adopts in any situation very easily and efficiently. He will be a good fit for any software industry with his high skills in front end.",
  },
];

export const education = [
  {
    institution: "Rajshahi University of Engineering & Technology",
    degree: "Bachelor's degree, Electrical & Computer Engineering",
    from: "Jan 2017",
    to: "Dec 2022",
    details:
      "Undergraduate thesis in 2023: image captioning with a CNN, LSTM, and attention. BLEU moved from 0.495 to 0.665. It was not published. Current team research is MS lesion segmentation. The latest report is on the Research tab.",
  },
  {
    institution: "Motijheel Government Boys' High School",
    degree: "Secondary School Certificate, Science",
    from: "Jan 2012",
    to: "2015",
    details: "Science group. Dhaka.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "Liquid", "HTML", "CSS", "C / C++"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Remix", "Redux Toolkit", "Tailwind CSS", "Shopify Polaris", "App Bridge", "Expo", "React Native", "shadcn/ui", "MUI", "Ant Design", "Flexbox", "CSS Grid", "Accessibility"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Koa", "NestJS", "Django", "REST", "GraphQL", "Webhooks", "Cron jobs", "OAuth", "JWT", "HMAC"],
  },
  {
    title: "Data",
    items: ["MongoDB", "PostgreSQL", "Redis", "Firestore", "Firebase Admin", "Prisma", "Mongoose"],
  },
  {
    title: "Shopify",
    items: ["Admin REST", "Admin GraphQL", "Shopify Functions", "Checkout extensions", "Theme app extensions", "App proxy", "Metafields", "Billing", "Built for Shopify"],
  },
  {
    title: "Cloud and delivery",
    items: ["Docker", "Docker Compose", "GitHub Actions", "Heroku", "Linode", "pm2", "AWS SQS", "Nginx"],
  },
  {
    title: "Observability and test",
    items: ["Sentry", "PostHog", "Cypress", "Jest", "Lighthouse", "Chrome DevTools"],
  },
  {
    title: "Integrations",
    items: ["QuickBooks Desktop", "Klaviyo", "GA4", "UddoktaPay", "Sender.net", "Mailgun", "Mailchimp"],
  },
  {
    title: "AI and machine learning",
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "Google Colab", "Kaggle", "EDA", "scikit-learn", "PyTorch", "CNN", "LSTM", "Attention", "U-Net", "Dice", "BLEU", "DenseNet", "Gemini", "Embeddings", "Prompt design", "Usage and cost logging"],
  },
  {
    title: "Agentic coding",
    items: ["Cursor", "Claude", "Agent harness", "Sub-agents", "MCP", "AGENTS.md", "Context management", "Token cost control", "Git worktrees"],
  },
  {
    title: "Design",
    items: ["Figma", "Illustrator", "Photoshop", "Typography", "Color and layout", "Brand identity", "Posters and campaign art"],
  },
  {
    title: "Product and tools",
    items: ["Git", "GitHub", "Jira", "ClickUp", "Firebase", "Better Auth"],
  },
];

export const productionCommits = [
  { name: "Push notifications", count: 421 },
  { name: "Share Cart", count: 413 },
  { name: "Sales & Pricing", count: 295 },
  { name: "Bevy marketing site", count: 99 },
  { name: "COOP-BI", count: 91 },
  { name: "Nautical catalog", count: 90 },
  { name: "Machine timers", count: 82 },
  { name: "QuickBooks sync", count: 67 },
  { name: "Horilla careers", count: 58 },
];

export const projects = [
  {
    id: "share-cart",
    group: "Bevy",
    title: "Share Cart",
    org: "Bevy Commerce",
    period: "2022 – Present",
    summary: "Shopify App Store app. A shopper shares a cart by link. The merchant sees who visited, who ordered, and the revenue.",
    points: [
      "Storefront theme extension: share button, modal, and the landing page that rebuilds the cart for the recipient.",
      "Admin on Next.js and Polaris: settings, billing, and the analytics page for unique visitors, orders, revenue, products, and sharers.",
      "Analytics sit on PostHog plus a Firestore conversion ledger, so money numbers are not only a product-analytics event.",
      "Closed Shopify’s security review. Firestore on the server uses Firebase Admin. OAuth scope updates use HMAC and signed state. Public routes no longer leak PII. Theme XSS sinks are fixed. Privacy webhooks deliver.",
      "Built for Shopify performance. Mobile Lighthouse is 83.6 while Share Cart is on. Turning the app off scores about 3.7 points higher. Shopify allows the app to cost up to 10 points, so this passed. Empty carts skip the script, and unused CDNs are removed.",
      "Share, open, and checkout finish inside 30 seconds. Retries against the Admin API are capped. Large carts are chunked across metafields.",
      "Also shipped subscription billing, the Polaris admin migration, and the Node upgrade on the app.",
    ],
    metrics: [
      { value: "83.6", short: "Lighthouse, app on", label: "Mobile Lighthouse while Share Cart is installed" },
      { value: "3.7 / 10", short: "of a 10-point budget", label: "Points of impact used. Shopify allows 10. Lower is better." },
      { value: "30 sec", label: "Ceiling for share, open, and checkout. Calls stay under it." },
    ],
    budget: { used: 3.7, limit: 10 },
    stack: ["Next.js", "Koa", "Firestore", "PostHog", "Liquid"],
  },
  {
    id: "sales-rules",
    group: "Bevy",
    title: "Sales & Pricing Rules",
    org: "Bevy Commerce",
    period: "2023 – 2025",
    summary: "The live app merchants use to change prices in bulk, run a storewide sale, and put a sales clock on the theme.",
    points: [
      "Bulk price changes, quantity breaks, storewide sales, and the sales-clock theme extension.",
      "Redis-backed sync so a large price update does not stall the admin or leave the shop half-updated.",
      "Shopify webhooks keep discount state in line with the shop. Failures land in Sentry.",
      "Cypress runs in GitHub Actions before a release.",
      "About 300 commits from 2023 to 2025. The app is Next.js, Node, MongoDB, and Redis.",
    ],
    metrics: [{ value: "~300", label: "commits" }],
    stack: ["Next.js", "Node.js", "MongoDB", "Redis", "Cypress", "Sentry"],
  },
  {
    id: "lbd",
    group: "Bevy",
    title: "Light Bulb Depot",
    org: "Bevy Commerce",
    period: "Migration",
    summary: "Moved a lighting distributor off a legacy catalog and into Shopify, with warehouse counts checked after the run.",
    points: [
      "659 products across 13 warehouses, about 1.94 million inventory units.",
      "About 1,500 media files, mapped from roughly 24,800 legacy items.",
      "Images, PDFs, tags, and metafields travel with the product, not as a follow-up spreadsheet.",
      "The pipeline queues work in MongoDB, then writes with Shopify bulk operations and productSet.",
      "CSV checks and production runbooks confirm inventory and media after each cut.",
    ],
    metrics: [
      { value: "659", label: "products" },
      { value: "1.94M", label: "inventory units" },
      { value: "13", label: "warehouses" },
    ],
    stack: ["Node.js", "MongoDB", "Shopify GraphQL", "GitHub Actions"],
  },
  {
    id: "coop-bi",
    group: "Bevy",
    title: "COOP-BI",
    org: "Bevy Commerce",
    period: "2026",
    summary: "The reporting service behind Power BI. Primary author, about 90 commits.",
    points: [
      "Shopify, Klaviyo, and traffic data are extracted into PostgreSQL. Power BI reads that database.",
      "ShopifyQL for commerce numbers. Klaviyo flows, campaigns, and conversion rate. Traffic channels from analytics.",
      "PDF intake for partner reports, with the parser hardened against messy files.",
      "Separate app, same period: Shopify Functions for member and non-member discounts, campaign stacking, and metafield banners. Nearly sole author of that functions app.",
    ],
    metrics: [{ value: "~90", label: "commits" }],
    stack: ["Node.js", "PostgreSQL", "Shopify Functions", "Klaviyo"],
  },
  {
    id: "quickbooks",
    group: "Bevy",
    title: "QuickBooks sync",
    org: "Bevy Commerce",
    period: "Integration",
    summary: "Shopify and QuickBooks Desktop stay in step through a queue, so finance stops retyping orders.",
    points: [
      "Products, customers, orders, and inventory move through AWS SQS.",
      "Remix admin for settings and sync logs, backed by MongoDB.",
      "JWT on the app, cron for the jobs, Docker for the runtime.",
      "About 67 commits on the integration layer.",
    ],
    metrics: [{ value: "SQS", label: "AWS queue" }],
    stack: ["Remix", "MongoDB", "AWS SQS", "Docker"],
  },
  {
    id: "horilla",
    group: "Bevy",
    title: "Horilla careers",
    org: "Bevy Commerce",
    period: "HR portal",
    summary: "Bevy’s public careers site and internal HR portal, built on a Horilla fork.",
    points: [
      "Public job pages and the apply flow, including screening questions on the description.",
      "Interview status for candidates, and employee login with password flows.",
      "Docker Compose staging so HR can review a change before it is live.",
      "About 58 commits on the careers customization. Horilla itself is open source. This work is the Bevy layer on top of it.",
    ],
    metrics: [{ value: "Django", label: "careers live" }],
    stack: ["Django", "PostgreSQL", "Docker"],
  },
  {
    id: "push",
    group: "Bevy",
    title: "Push notifications",
    org: "Bevy Commerce",
    period: "2021 – 2023",
    summary: "The notification product from the first years at Bevy. About 421 commits.",
    points: [
      "Merchant admin for campaigns, delivery through Firebase, and the API the mobile client calls.",
      "Next.js and Koa on the server, Redis for the queue of sends.",
      "This is the largest single commit count in the early portfolio, before Share Cart and pricing took over.",
    ],
    metrics: [{ value: "~421", label: "commits" }],
    stack: ["Next.js", "Koa", "Redis", "Firebase"],
  },
  {
    id: "nautical",
    group: "Contract",
    title: "Nautical chart catalog",
    org: "RiseUp Labs · American Nautical Services",
    period: "Nov 2025 – Apr 2026",
    summary: "Senior Shopify Developer on contract. Nearly every commit on the chart catalog is mine. 90 commits, one from a teammate.",
    points: [
      "Interactive map search over the chart library, with office color sets and scale filters.",
      "UKHO XML import into the catalog, including charts that do not match an existing record.",
      "RTZ route upload. The app detects which charts a route crosses.",
      "Paper charts add to the Shopify cart. Digital charts go out as a quote.",
      "Dense libraries were slow. GeoJSON payloads and cart updates were cut down, and overlapping charts got a selection rule instead of a pile of pins.",
      "Theme extension block so the merchant theme can open the chart selector. Deployed on Heroku.",
    ],
    metrics: [{ value: "90", label: "commits, almost all mine" }],
    stack: ["Remix", "MongoDB", "Heroku", "Shopify"],
  },
  {
    id: "green-wallet",
    group: "Contract",
    title: "Green Wallet",
    org: "Independent",
    period: "Jan – Feb 2024",
    summary: "A checkout discount the merchant turns on without hiring anyone to edit the theme.",
    points: [
      "Solo Remix app, January to February 2024.",
      "A token quantity in the cart becomes a percent discount.",
      "The rule runs in a Shopify checkout extension, so the theme stays stock.",
    ],
    metrics: [{ value: "Solo", label: "Remix app" }],
    stack: ["Remix", "Shopify Functions"],
  },
  {
    id: "consumed",
    group: "Contract",
    title: "Consumed",
    org: "Upwork",
    period: "Sep 2025",
    summary: "Upwork engagement. The client could see campaign results instead of a stream of discount events.",
    points: [
      "Short build in September 2025 on an existing influencer-discount app.",
      "Line, bar, and pie views on Prisma and PostgreSQL for partner-discount analytics.",
    ],
    metrics: [{ value: "Upwork", label: "client delivery" }],
    stack: ["Prisma", "PostgreSQL"],
  },
  {
    id: "jobsyo",
    group: "Product",
    title: "Jobsyo",
    org: "Co-founded",
    period: "Sep 2025 – Present",
    summary: "AI job product I co-founded. Live, and still pre-revenue. I lead payments, auth, billing, and the admin around matching.",
    points: [
      "NestJS, MongoDB, and Redis. Next.js on the web.",
      "UddoktaPay payments, subscription state, and employer credits.",
      "Session cookies and refresh hardening. Billing and pricing UI. Admin charts.",
      "Resume-score free limits, so an AI feature has a gate and a cost log instead of an open meter.",
      "Matching and embeddings are a team system. I own the product shell around them: who can call the model, what they pay, and what the admin sees.",
      "Last 90 days, November 2026: 6,433 users, 62,976 visitors, 4,574 resumes uploaded, 70 active jobs, 3,670 apply clicks, 933 AI match views, and 15,498 AI calls.",
    ],
    metrics: [
      { value: "6,433", label: "users, 90 days" },
      { value: "62,976", label: "visitors, 90 days" },
      { value: "3,670", label: "apply clicks" },
    ],
    stack: ["Next.js", "NestJS", "MongoDB", "Redis", "Gemini"],
    href: "https://jobsyo.com",
  },
  {
    id: "sakinah",
    group: "Product",
    title: "Sakinah",
    org: "Solo",
    period: "Aug – Sep 2026",
    summary: "I kept missing the notebook. Sakinah is the system I built for myself, then opened to other people. It is live.",
    points: [
      "Yearly, monthly, and weekly goals, tied to the day’s tasks.",
      "A brain dump for thoughts that are not tasks yet, then a choice about when they get done.",
      "Habit tracking and a reflection on what was finished, what was missed, and why. Missing a task is not treated as failure.",
      "Prayer times, Niyyah, and a daily Qur’an and Hadith reminder, next to the work plan.",
      "Gemini drafts the day from goals, earlier plans, and unfinished tasks. A deterministic path still runs if the model is off.",
      "Insights for habits and progress. The web app is a PWA, so it installs from the phone browser. A native app is the next step.",
      "Next.js, MongoDB, and Auth.js on the web. Expo for the mobile build.",
    ],
    metrics: [{ value: "Live", label: "web and mobile" }],
    stack: ["Next.js", "Expo", "MongoDB", "Gemini"],
    href: "https://sakinah-life.vercel.app/",
    post: "https://lnkd.in/p/gKKymsFj",
  },
  {
    id: "ms-lesion",
    group: "Research",
    title: "MS lesion segmentation",
    org: "Team research with Shakib",
    period: "Ongoing",
    summary: "Medical imaging research on MS lesions. I work on it with the team. The latest numbers are the team report, not a journal paper.",
    points: [
      "The current report compares overall patient Dice with tiny-lesion Dice under 30 mm³.",
      "Kaggle E3, the multi-fold system: 79.39% overall Dice on the 16-patient selection set, 95% CI 76.84 to 81.69, and 6.19 false positives per scan.",
      "Local Exp 14 v2: 80.87% selection Dice and 84.77% on the calibration set. It is the stronger balance of overall score and tiny lesions.",
      "The tiny-lesion specialist reaches 54.10% selection Dice and 71.01% calibrated on plaques under 30 mm³.",
      "False positives on the gated system fell from 29.97 to 6.19 per scan after hysteresis, an anatomical veto, and 3D plus 2.5D fusion.",
      "The external 3D-MR-MS set and the MS3SEG test cases 081–100 are still held out. The paper is not published. Full report is linked below.",
    ],
    metrics: [
      { value: "80.87%", label: "Best selection Dice, Exp 14 v2" },
      { value: "79.39%", label: "Kaggle E3 overall Dice" },
      { value: "6.19", label: "False positives per scan, gated system" },
    ],
    stack: ["Python", "PyTorch", "3D U-Net", "MS3SEG"],
    href: "https://sites.google.com/view/phitron-ms-lesion-segmentation/full-page-embed",
  },
  {
    id: "image-caption",
    group: "Research",
    title: "Image captioning thesis",
    org: "RUET ECE · undergraduate",
    period: "September 2023",
    summary: "Bachelor thesis, submitted for the degree and not published. Supervisor Hafsa Binte Kibria.",
    points: [
      "Title: Capturing Image Context with BLEU-Guided CNN, LSTM, and Attention Model.",
      "Flickr8k, 8,091 images, five captions each. Train 6,472, validation 1,619. DenseNet201 encodes the image. An LSTM writes the caption.",
      "Attention lifted BLEU from 0.4954 to 0.66537 on the same setup.",
      "The model has 4,316,709 trainable parameters. Training ran on Kaggle for 8 epochs.",
      "The thesis was accepted for the B.Sc. It was not sent to a journal.",
    ],
    metrics: [
      { value: "0.665", label: "BLEU with attention" },
      { value: "0.495", label: "BLEU before attention" },
      { value: "8,091", label: "Flickr8k images" },
    ],
    stack: ["Python", "CNN", "LSTM", "Attention", "BLEU"],
  },
];

export const projectGroups = ["All", "Bevy", "Contract", "Product", "Research"];

export const services = [
  {
    num: "01",
    title: "Shopify app",
    description: "A public or custom app, from the admin to the storefront, ready for review.",
    deliver: ["Embedded admin", "Theme or checkout extension", "Billing and webhooks", "Security pass for app review"],
  },
  {
    num: "02",
    title: "Checkout and discounts",
    description: "Shopify Functions and checkout UI for member prices, quantity rules, and campaigns that stack.",
    deliver: ["Function logic", "Checkout extension", "Campaign rules", "A merchant can turn it on without a theme edit"],
  },
  {
    num: "03",
    title: "Catalog migration",
    description: "Move products, inventory, media, and metafields into Shopify with a count you can check.",
    deliver: ["Field mapping", "Bulk Admin API", "Warehouse inventory", "A verification sheet after the run"],
  },
  {
    num: "04",
    title: "ERP and accounting sync",
    description: "Shopify to QuickBooks, or the next system, through a queue instead of a spreadsheet.",
    deliver: ["Products, customers, orders, inventory", "AWS SQS or an equivalent queue", "Settings and a sync log"],
  },
  {
    num: "05",
    title: "Analytics pipeline",
    description: "Commerce, email, and traffic data in Postgres, shaped for Power BI or the warehouse you already use.",
    deliver: ["Extract jobs", "A database someone else can query", "Campaign and traffic breakdowns"],
  },
  {
    num: "06",
    title: "Performance and security",
    description: "Get an app inside Built for Shopify, or close the findings from a security review.",
    deliver: ["Lighthouse before and after", "Script cost on the storefront", "Auth, PII, and XSS fixes"],
  },
  {
    num: "07",
    title: "AI product features",
    description: "Gemini in a real flow, with a limit, a cost log, and a path that still works when the model is off.",
    deliver: ["Feature design", "Usage limits", "Billing around the model", "Admin visibility"],
  },
  {
    num: "08",
    title: "Payments and auth",
    description: "Subscriptions, credits, and session auth on NestJS, Node, or the stack you already run.",
    deliver: ["Checkout or payment provider", "Plans and entitlements", "Cookie or token sessions"],
  },
  {
    num: "09",
    title: "Internal tools",
    description: "Careers sites, admin search, and the screens a team uses every day.",
    deliver: ["Django or Node", "Docker for staging", "The workflow your operators asked for"],
  },
  {
    num: "10",
    title: "A fixed contract",
    description: "One product, a date, and a senior engineer who has shipped this shape of work before.",
    deliver: ["A written scope", "Weekly progress", "The repo and a handover"],
  },
];
