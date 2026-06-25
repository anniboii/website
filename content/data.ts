/**
 * ============================================================
 *  CONTENT DATA FILE — Edit everything about the site here.
 *  This is the single source of truth for all site content.
 * ============================================================
 */

export const siteConfig = {
  name: "Aniruddh ",
  initials: "AG",
  tagline: "Engineer. Researcher. Leader. Creator.",
  description:
    "IIT Bombay Alumni, incoming Senior Associate at Meesho, researcher, content creator, and builder of communities.",
  email: "aniruddhgoyal03@gmail.com", // TODO: Replace with real email
  location: "Mumbai, India",
  resumeUrl: "/resume.pdf", // TODO: Add real resume PDF to /public/
  social: {
    github: "https://github.com/aniruddh-goyal", // TODO: Replace
    linkedin: "https://www.linkedin.com/in/aniruddhgoyal/", // TODO: Replace
    youtube: "https://www.youtube.com/@AniruddhGoyalIITB", // TODO: Replace
    instagram: "https://instagram.com/anniboii", // TODO: Replace
    spotify: "https://open.spotify.com/track/32G5eLgWmKuJbar2fCW1ja?si=lt2uHp0HRUmZBXsr_1ReQA", // TODO: Replace
    twitter: "https://twitter.com/aniruddh_goyal", // TODO: Replace
  },
};

export const heroMetrics = [
  { label: "YouTube Subscribers", value: 35, prefix: "", suffix: "K+", display: "35K+" },
  { label: "Overall Views", value: 24, prefix: "", suffix: "M+", display: "24M+" },
  { label: "Professional Experiences", value: 9, prefix: "", suffix: " +", display: "9" },
  { label: "IIT Bombay Awards", value: 5, prefix: "", suffix: "", display: "5" },
  { label: "Music Releases", value: 1, prefix: "", suffix: "", display: "1" },
];

export const roles = [
  "Engineer.",
  "Researcher.",
  "Leader.",
  "Creator.",
  "Builder.",
];

export const aboutContent = {
  headline: "Exploring Ideas and Creating Impact",
  paragraphs: [
    "I'm a Dual Degree (B.Tech + M.Tech) student in Mechanical Engineering at IIT Bombay. Over the past five years, I've been fortunate to explore opportunities far beyond the classroom from research in Canada and startup internships to student leadership, content creation, and community building",
    "What excites me most is learning how different worlds connect. I've worked on optimization models for carbon capture systems, led initiatives impacting thousands of students and alumni, created content viewed millions of times online, and collaborated with people across academia, industry, and startups",
    "These experiences have taught me that meaningful work rarely sits within a single discipline. The most rewarding challenges often lie at the intersection of technology, business, creativity, and people. And the most interesting people refuse to pick just one thing.",
    "I'm joining Meesho as a Senior Associate amd this site is a living record of everything I've built, created, and learned along the way.",
  ],
  // TODO: Replace with real image path
  imagePlaceholder: "/public/images/directors.jpeg", span: "normal",
};

export const timeline = [
  {
    year: "2021",
    title: "Entered IIT Bombay",
    org: "IIT Bombay",
    description:
      "Joined one of India's premier engineering institutions for a Dual Degree in Mechanical Engineering. The start of five transformative years.",
    type: "education",
    // TODO: Add image path: image: "/images/timeline/iitb.jpg"
  },
  {
    year: "2022",
    title: "Joined SARC",
    org: "Student Alumni Relations Cell",
    description:
      "Began my journey with SARC — the bridge between IIT Bombay's student community and its global alumni network. Started as a member, eventually rose to Overall Coordinator.",
    type: "leadership",
  },
  {
    year: "2023",
    title: "Mitacs Research Internship",
    org: "Canada",
    description:
      "Selected for the prestigious Mitacs Globalink Research Internship. Spent a summer in Canada conducting cutting-edge research, experiencing a global academic environment.",
    type: "research",
  },
  {
    year: "2023",
    title: "Operations Intern",
    org: "Shadowfax Technologies",
    description:
      "Worked at one of India's leading logistics startups. Gained first-hand exposure to operations at scale — data-driven decision making, process optimization, and startup culture.",
    type: "work",
  },
  {
    year: "2024",
    title: "Dual Degree Project",
    org: "IIT Bombay",
    description:
      "Developed a path planning-based FEM framework for Directed Energy Deposition — a novel Python simulation tool predicting in-process thermal stresses for arbitrary toolpaths. Supervised by Prof. Gurminder Singh.",
    type: "research",
  },
  {
    year: "2025",
    title: "Joining Meesho",
    org: "Meesho",
    description:
      "Incoming Senior Associate at Meesho — one of India's fastest-growing e-commerce companies. Excited to apply engineering thinking to product and business problems at scale.",
    type: "work",
    isCurrent: true,
  },
];

export const experiences = [
  {
    role: "Senior Business Associate",
    org: "Meesho",
    period: "2026 - Present",
    type: "Full-time",
    description:
      "Incoming role at one of India's leading e-commerce companies. Details to be updated post-joining.",
    // TODO: Add real achievements
    achievements: [
      "Details to follow",
    ],
    logo: "/images/logos/meesho.png", // TODO: Add logo
    tags: ["E-commerce", "Operations", "Product"],
    isCurrent: true,
  },
  {
    role: "Operations Analyst",
    org: "Shadowfax Technologies",
    period: "Summer 2025",
    type: "Internship",
    description:
      "Worked at Shadowfax, India's leading tech-enabled last-mile logistics company, contributing to operations strategy and data-driven process improvements",
    achievements: [
      "Spearheaded the FM hubs exppansion across 1550+ pincodes across the country which resulted in significant revenue uplift", // TODO: Update
      "Improved seller retention by 15% by identifying churn zones & introducing targeted incentives ", // TODO: Update
      "Boosted serviceability by 22% via DOH interventions, zone prioritization & mid-mile diagnostic",
    ],
    logo: "/images/logos/shadowfax.png", // TODO: Add logo
    tags: ["Logistics", "Operations", "Startup"],
  },
  {
    role: "Mitacs Globalink Research Intern",
    org: "University of Regina, Canada",
    period: "Summer 2024",
    type: "Research Internship",
    description:
      "Worked on optimizing Carbon Capture, Utilization, and Storage (CCUS) systems through mathematical modeling and supply chain analytics",
    achievements: [
      "Awarded a CAD 9,000+ scholarship and selected among 800+ scholars from 20,000+ global applicants",
      "Reduced CCUS system costs by 15% and improved technology-selection efficiency by 12% using optimization models developed in GAMS", // TODO: Update with real research area
      "Improved operational efficiency by 7% through MILP-based supply chain analytics and earned a Letter of Recommendation from the IEOR Director",
    ],
    logo: "/images/logos/mitacs.png", // TODO: Add logo
    tags: ["Research", "Global Experience", "Academic"],
  },
  
  {
    role: "Product Manager",
    org: "Qrata",
    period: "Winter 2023",
    type: "Internship",
    description:
      "Worked as a product intern at a startup providing HR solutions connecting organisations with pure talent",
    achievements: [
      "Delivered 25% increase in user adoption & 12% growth in market positioning by crafting product roadmaps",
      "Drove go - to - market strategy for boutique hiring model, onboarding 10 + HRs & 100 + new users in 3 weeks",
      "Streamlined dashboard creation for product KPIs & freed 120 + hours / month via Power BI enhancements",
    ],
    logo: "/images/logos/iitb.png", // TODO: Add logo
    tags: ["Product", "Analytics", "Dashboards"],
  },
];

export const research = {
  featured: {
    title: "Path Planning-Based Finite Element Modeling of Directed Energy Deposition",
    subtitle: "Dual Degree Project — IIT Bombay",
    supervisor: "Prof. Gurminder Singh",
    period: "2024 — 2025",
    description:
      "Developed a novel Python-based FEM framework to predict in-process thermal stresses for arbitrary toolpaths in Additive Manufacturing (FDM/DED). The framework enables toolpath-aware thermal simulation without expensive commercial software.",
    longDescription:
      "Traditional thermal simulation tools like COMSOL impose fixed raster toolpaths and cannot model arbitrary path strategies. This research built a custom FEM solver from scratch that: activates elements incrementally per toolpath step, applies a moving Gaussian heat source, accumulates thermal stress history across all timesteps, and compares six distinct toolpath strategies (raster, serpentine, zigzag45°, contour, crosshatch, custom CSV).",
    contributions: [
      "Novel Python FEM framework for toolpath-based thermal simulation",
      "Six-toolpath comparative study with von Mises stress fields",
      "COMSOL limitation documentation — heat leakage into inactive zones",
      "Bead overlap sensitivity analysis",
      "Smooth pcolormesh visualization with cubic interpolation",
    ],
    techStack: ["Python", "NumPy", "SciPy", "Matplotlib", "FEM", "COMSOL"],
    // TODO: Add real paper/thesis link
    links: {
      thesis: "#",
      github: "#",
    },
    // TODO: Add simulation result images
    images: [],
  },
  // TODO: Add more research projects
  others: [],
};

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "This very website — built with Next.js 15, Framer Motion, and Tailwind CSS. Designed to be a living personal brand and content platform.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    links: { github: "#", live: "#" },
    type: "technical",
  },
  {
    title: "SARC Events Platform",
    description:
      "Platform for managing Student Alumni Relations Cell events, registrations, and alumni outreach at IIT Bombay.",
    tags: ["Leadership", "Events", "Community"],
    links: {},
    type: "non-technical",
    // TODO: Add real description and details
  },
  {
    title: "Content Creation Journey",
    description:
      "Built a YouTube channel from 0 to 30K+ subscribers and crossed 1M+ views on Instagram reels — all through authentic storytelling about IIT life, engineering, and personal growth.",
    tags: ["YouTube", "Instagram", "Content"],
    links: { live: siteConfig.social.youtube },
    type: "non-technical",
  },
  {
    title: "Non-Technical Project 3",
    description: "Description coming soon.", // TODO: Replace
    tags: ["Tag1", "Tag2"],
    links: {},
    type: "non-technical",
  },
];

export const leadership = {
  sarc: {
    title: "Student Alumni Relations Cell, IITB",
    role: "Overall Coordinator",
    period: "2024 - 2025",
    description:
      "SARC is the official body at IIT Bombay responsible for fostering relationships between current students and the global alumni network. As Overall Coordinator, I led every major initiative from flagship events to mentorship programs",
    stats: [
      { label: "Team Size", value: "80", suffix: " Members" },
      { label: "Events Organized", value: "60", suffix: "+" },
      { label: "Alumni Engaged", value: "20k", suffix: "+" },
      { label: "Years Active", value: "3", suffix: "" },
    ],
    achievements: [
      "Only student representative in IITBAA Board of Directors (1/12k+ students)",
      "Revamped Alumination- the student-Alumni fest with footfall inc. by 60%",
      "Increased revenue by 20% & saved INR 0.5M+ via revenue model overhaul",
      "Introduced CRM to boost alumni mentorship active mentors by 55%",
    ],
  },
  awards: [
    {
      title: "Institute Organisational Citation",
      category: "by Dean of Student Affairs",
      year: "2026",
      description: "Awarded to 8/2000+ in graduating class", // TODO: Replace with real awards
    },
    {
      title: "Outstanding Leadership Award",
      category: "by Dean of Alumni & Corporate Relations",
      year: "2026",
      description: "Recognised for commitment to the institute",
    },
    {
      title: "Certificate of Achievement",
      category: "by Mechanical Engineering Department",
      year: "2026",
      description: "Awarded to the outstanding students in branch",
    },
    {
      title: "Certificate of Appreciation",
      category: "by Dean of Alumni & Corporate Relations",
      year: "2025",
      description: "Recognication for efforts to the Alumni community",
    },
    {
      title: "Institute Organisational Colour",
      category: "by Dean of Student Affairs",
      year: "2025",
      description: "Contributions to the institute in 3rd year",
    },
  ],
};

export const creatorContent = {
  youtube: {
    handle: "@aniruddh-goyal",
    subscribers: "35K+",
    description:
      "Sharing honest insights on IIT Bombay, JEE Prep placements, internships, student life, and personal growth through long-form content and storytelling.",
    highlights: [
      "35K+ subscribers",
      "24M+ views across paltforms",
      "Content for students, aspirants & young professionals",
    ],
    url: "https://youtu.be/eW1W4gtVCNM?si=fF_PHYh57nUGUYhh",

    featuredVideoId: "",
    thumbnail: "/images/youtubes.png",
  },

  joshTalks: {
    title: "Josh Talks Speaker",
    description:
      "Shared my journey from JEE preparation to IIT Bombay, leadership, content creation, and personal growth on one of India's largest storytelling platforms.",
    url: "https://youtu.be/Vq3-CbRgODk?si=9mWNHxDWVz9W0uG_",
    thumbnail: "/images/joshtalks1.png",
  },

  music: {
    title: "Original Music",
    description:
      "Beyond academics and work, I enjoy creating music. My debut release is available across major streaming platforms.",
    spotifyUrl: siteConfig.social.spotify,
    appleMusicUrl: "https://music.apple.com/in/album/behtar-hoga/6770652959?i=6770652960",

    trackName: "Behtar Hoga",
    thumbnail: "/images/songs.png",
  },
};
export const beyondWork = {
  drumming: {
    headline: "I play drums.",
    description:
      "Not as a side hobby. As a genuine creative outlet that's been part of my life through all five years at IIT Bombay. There's something about the physicality of percussion — the coordination, the rhythm, the flow state — that no amount of simulation code can replicate.",
    // TODO: Add real drumming images/video
    images: [],
    videoUrl: "",
  },
  // TODO: Add more personal interests
  otherInterests: [
    { title: "Vedic Astrology", description: "Exploring the intersection of ancient systems and modern thinking." },
    { title: "Travel", description: "The Mitacs internship took me to Canada — many more journeys ahead." },
  ],
};

export const galleryCategories = [
  "IIT Bombay",
  "Internships",
  "Extra-Currics",
  "Personal Moments",
];

// TODO: Populate with real gallery images
export const galleryImages: Array<{
  src: string;
  alt: string;
  category: string;
  span?: "wide" | "tall" | "normal";
}> = [
    { src: "/images/gallery/memento.JPG", alt: "SARC Event", category: "IIT Bombay", span: "normal" },
    { src: "/images/gallery/doolla.jpeg", alt: "Grad", category: "IIT Bombay" },
  { src: "/images/gallery/shadowfax.jpeg", alt: "Intern", category: "Internships", span: "wide" },
    { src: "/images/gallery/acr.jpeg", alt: "SARC Event", category: "IIT Bombay", span: "normal" },
    { src: "/images/gallery/speech.jpeg", alt: "SARC Event", category: "Extra-Currics" },
    { src: "/images/gallery/placement.jpeg", alt: "Grad", category: "Personal Moments", span: "normal" },
    { src: "/images/gallery/convo.jpeg", alt: "Grad", category: "IIT Bombay", span: "wide"},
    { src: "/images/gallery/drums.jpeg", alt: "Personal Moment", category: "Extra-Currics", span: "wide" },
    { src: "/images/gallery/mitacs.jpeg", alt: "Intern", category: "Internships", span: "wide" },
    { src: "/images/gallery/commencement.jpeg", alt: "Grad", category: "IIT Bombay" },
    { src: "/images/gallery/teamalumination.JPG", alt: "SARC Event", category: "Extra-Currics" },
    { src: "/images/gallery/andaman.jpeg", alt: "Personal Moment", category: "Personal Moments" },
    { src: "/images/gallery/mic.JPG", alt: "SARC Event", category: "Extra-Currics" },
    { src: "/images/gallery/alumination.JPG", alt: "SARC Event", category: "Personal Moments", span: "normal"},
    { src: "/images/gallery/drums1.jpeg", alt: "Personal Moment", category: "Extra-Currics", span: "wide" },
    { src: "/images/gallery/bike.jpeg", alt: "Personal Moment", category: "Extra-Currics", span: "normal" },
    { src: "/images/gallery/gudi.jpeg", alt: "Grad", category: "IIT Bombay", span: "wide" },
    { src: "/images/gallery/drums1.jpeg", alt: "Personal Moment", category: "Extra-Currics", span: "wide" },

];

export const blogPosts = [
  {
    slug: "placement-season-iitb",
    title: "What Nobody Tells You About IIT Bombay Placement Season",
    excerpt:
      "The real story behind the spreadsheets, the anxiety, and the moments that actually matter when you're figuring out your next chapter.",
    date: "2025-01-15",
    readingTime: "8 min read",
    tags: ["IIT Bombay", "Placements", "Personal Growth"],
    featured: true,
    // TODO: Add real content in /app/blog/[slug]/content/
  },
  {
    slug: "leading-sarc",
    title: "What I Learned Leading a 16-Person Team at 21",
    excerpt:
      "Leadership isn't about authority. It's about creating conditions for other people to do their best work. Here's what two years at SARC taught me.",
    date: "2025-02-10",
    readingTime: "6 min read",
    tags: ["Leadership", "SARC", "IIT Bombay"],
    featured: true,
  },
  {
    slug: "ddp-research-journey",
    title: "Building a FEM Solver From Scratch: The DDP Story",
    excerpt:
      "COMSOL couldn't do what I needed. So I built my own finite element solver in Python. A story about hitting walls and writing your way through them.",
    date: "2025-03-05",
    readingTime: "10 min read",
    tags: ["Research", "Technology", "Engineering"],
    featured: false,
  },
  {
    slug: "youtube-30k",
    title: "From 0 to 30K: Growing a YouTube Channel While Doing a Dual Degree",
    excerpt:
      "No viral hacks. No posting schedule from a guru. Just showing up consistently and talking about things I actually cared about.",
    date: "2025-04-01",
    readingTime: "7 min read",
    tags: ["Content Creation", "YouTube", "Personal Growth"],
    featured: false,
  },
];

export const resources = [
  {
    category: "Books",
    items: [
      { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", description: "On building and leadership in brutal conditions.", affiliateUrl: "#" }, // TODO: Add real affiliate link
      { title: "Atomic Habits", author: "James Clear", description: "The system behind every habit worth keeping.", affiliateUrl: "#" },
      { title: "Zero to One", author: "Peter Thiel", description: "On startups, monopolies, and thinking from first principles.", affiliateUrl: "#" },
      { title: "The Pyschology of Money", author: "Peter Thiel", description: "On startups, monopolies, and thinking from first principles.", affiliateUrl: "#" },
      { title: "Getting Dressed and Parking Cars", author: "Ankur Kejriwal", description: "On startups, monopolies, and thinking from first principles.", affiliateUrl: "#" },
    ],
  },
  {
    category: "Tools",
    items: [
      { title: "Notion", description: "My second brain for notes, projects, and everything in-between.", url: "https://notion.so" },
      { title: "Obsidian", description: "For linked thinking and building a knowledge graph.", url: "https://obsidian.md" },
      { title: "Linear", description: "Best project tracker I've used. Obsessively well-designed.", url: "https://linear.app" },
    ],
  },
  {
    category: "Software",
    items: [
      { title: "VS Code", description: "Primary code editor. Ergonomic, fast, extensible.", url: "https://code.visualstudio.com" },
      { title: "Python", description: "My go-to for simulation, data analysis, and automation.", url: "https://python.org" },
    ],
  },
  {
    category: "Learning Resources",
    items: [
      { title: "MIT OpenCourseWare", description: "World-class lectures, free. No excuse not to learn.", url: "https://ocw.mit.edu" },
      { title: "3Blue1Brown", description: "Visual mathematics that actually makes you understand things.", url: "https://youtube.com/@3blue1brown" },
    ],
  },
];

export const nowPage = {
  lastUpdated: "June 2025",
  working: [
    "Wrapping up my Dual Degree Project at IIT Bombay",
    "Preparing to join Meesho as Senior Associate",
    "Finishing final semester coursework",
  ],
  learning: [
    "Advanced FEM methods and computational mechanics",
    "Product thinking and go-to-market strategy",
    "Music production fundamentals",
  ],
  reading: [
    "The Hard Thing About Hard Things - Ben Horowitz",
    "Zero to One - Peter Thiel",
    // TODO: Update with current reading
  ],
  building: [
    "This website",
    "Next content batch for YouTube",
    // TODO: Update with current builds
  ],
};
