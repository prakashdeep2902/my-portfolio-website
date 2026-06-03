import type {
  BlogPost,
  ExperienceItem,
  NavItem,
  Project,
  SiteConfig,
  SkillCategory,
  StatCard,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Prakash Deep Sharma",
  title: "Full Stack Software Engineer",
  tagline:
    "Building scalable web applications, AI-powered solutions, automation systems, and modern SaaS products.",
  summary:
    "Experienced Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, Stripe integrations, AI applications, automation systems, and cloud-based architectures.",
  email: "prakashdeep2902@gmail.com",
  github: "https://github.com/prakashdeep2902",
  linkedin: "https://www.linkedin.com/in/pkdeep/",
  resumeUrl: "/resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML", level: 98 },
      { name: "CSS", level: 92 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 94 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 88 },
      { name: "Linux", level: 86 },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "OpenAI", level: 88 },
      { name: "Gemini", level: 85 },
      { name: "LangChain", level: 82 },
      { name: "Agentic AI", level: 86 },
      { name: "Automation Systems", level: 90 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "device-monitoring",
    title: "Secure Device Monitoring Agent",
    description:
      "Enterprise-grade Windows monitoring agent with secure reporting, system metrics collection, update management, and HMAC authentication.",
    tech: ["Node.js", "MongoDB", "Security", "APIs"],
    github: "https://github.com",
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    id: "ai-email",
    title: "AI Email Template Platform",
    description:
      "Dynamic email generation platform using AI models with customizable templates and automated content generation.",
    tech: ["React", "TypeScript", "Gemini AI", "Node.js"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-violet-600/20 to-purple-500/20",
  },
  {
    id: "stripe-saas",
    title: "Stripe Subscription System",
    description:
      "Complete SaaS onboarding and subscription workflow integrated with Stripe Checkout and webhooks.",
    tech: ["React", "Stripe", "Node.js"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-emerald-600/20 to-teal-500/20",
  },
  {
    id: "holiday-calendar",
    title: "Holiday Calendar Management System",
    description:
      "Excel upload processing system with automated validation, parsing, and holiday scheduling.",
    tech: ["Node.js", "MongoDB"],
    github: "https://github.com",
    gradient: "from-amber-600/20 to-orange-500/20",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer (Full Stack Development)",
    company: "Document It llc",
    period: "Mar 2025 — May 2026",
    description:
      "Architecting and delivering scalable web applications, AI-powered features, and automation pipelines for production SaaS products.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Software Engineer (Backend)",
    company: "Nobroker.com",
    period: "Jun 2023 — Mar 2025",
    description:
      "Developed and maintained backend services for the company's core products.",
    technologies: ["TypeScript", "Express.js", "Node.js", "MongoDB", "Redis", "GraphQL" ,"PostgreSQL", "AWS", "Docker", "GitHub Actions"],
  },
  {
    title: "Backend Developer Trainee and Teaching Assistant",
    company: "Coding Ninjas ",
    period: "2022 — 2023",
    description:
      "Trained and guided students in JavaScript, Node.js, and web development concepts.",
    technologies: ["JavaScript", "Node.js", "React", "MongoDB"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "ai-agents",
    title: "Building AI Agents with Node.js",
    excerpt:
      "A practical guide to architecting agentic workflows with LangChain, OpenAI, and production-ready Node.js backends.",
    category: "AI",
    readTime: "8 min read",
    date: "May 2026",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    id: "react-architecture",
    title: "Advanced React Architecture",
    excerpt:
      "Patterns for scalable component design, state management, and performance optimization in modern React apps.",
    category: "Frontend",
    readTime: "12 min read",
    date: "Apr 2026",
    gradient: "from-violet-500/30 to-purple-500/30",
  },
  {
    id: "stripe-subs",
    title: "Stripe Subscription Best Practices",
    excerpt:
      "Webhook handling, idempotency, and checkout flows for reliable SaaS billing infrastructure.",
    category: "SaaS",
    readTime: "10 min read",
    date: "Mar 2026",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    id: "mongodb-perf",
    title: "MongoDB Performance Optimization",
    excerpt:
      "Indexing strategies, aggregation pipelines, and query patterns for high-throughput applications.",
    category: "Database",
    readTime: "7 min read",
    date: "Feb 2026",
    gradient: "from-amber-500/30 to-orange-500/30",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI for Developers",
    excerpt:
      "How to design autonomous AI systems that integrate safely with your existing software stack.",
    category: "AI",
    readTime: "9 min read",
    date: "Jan 2026",
    gradient: "from-rose-500/30 to-pink-500/30",
  },
];

export const githubStats: StatCard[] = [
  { label: "Repositories", value: "42+", icon: "folder" },
  { label: "Stars", value: "180+", icon: "star" },
  { label: "Contributions", value: "1.2k+", icon: "git-commit" },
  { label: "Pull Requests", value: "95+", icon: "git-pull-request" },
];

export const topTechnologies = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "MongoDB",
];

export const aboutStats = [
  { label: "Years Experience", value: "3+", icon: "calendar" },
  { label: "Projects Completed", value: "30+", icon: "folder-kanban" },
  { label: "Technologies", value: "10+", icon: "layers" },
];

export const floatingTechIcons = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "AWS",
  "Docker",
  "Agentic AI",
];

export const heroTypingPhrases = [
  "scalable web applications",
  "AI-powered products",
  "automation systems",
  "cloud-ready solutions",
];
