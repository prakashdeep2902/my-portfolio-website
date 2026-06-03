const responses: Record<string, string> = {
  about: `Prakash Deep Sharma is a Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, and cloud-native architectures. He builds scalable SaaS platforms, AI-powered applications, and automation systems with a focus on performance and security.`,

  projects: `Prakash has built several production-grade projects including:
• Secure Device Monitoring Agent — Enterprise Windows monitoring with HMAC auth
• AI Email Template Platform — AI-driven dynamic email generation
• Stripe Subscription System — Full SaaS billing with webhooks
• Holiday Calendar Management — Excel processing and scheduling automation`,

  technologies: `Core technologies include React, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Redis, AWS, Docker, GitHub Actions, Stripe, OpenAI, Gemini, and LangChain for agentic AI workflows.`,

  experience: `Prakash has 6+ years of experience as a Software Engineer and Full Stack Developer, including remote engineering roles building SaaS products, payment integrations, REST APIs, and AI automation systems for startups and enterprise clients.`,

  default: `I'm Prakash's portfolio assistant. Ask me about his background, projects, tech stack, or experience. Try: "Tell me about Prakash", "What projects has he built?", or "What technologies does he use?"`,
};

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

export function getAIResponse(userMessage: string): string {
  const msg = normalize(userMessage);

  if (
    msg.includes("about") ||
    msg.includes("who is") ||
    msg.includes("tell me about prakash") ||
    msg.includes("background") ||
    msg.includes("introduce")
  ) {
    return responses.about;
  }

  if (
    msg.includes("project") ||
    msg.includes("built") ||
    msg.includes("portfolio") ||
    msg.includes("work")
  ) {
    return responses.projects;
  }

  if (
    msg.includes("tech") ||
    msg.includes("stack") ||
    msg.includes("skill") ||
    msg.includes("language") ||
    msg.includes("framework")
  ) {
    return responses.technologies;
  }

  if (
    msg.includes("experience") ||
    msg.includes("years") ||
    msg.includes("career") ||
    msg.includes("job") ||
    msg.includes("work history")
  ) {
    return responses.experience;
  }

  if (msg.includes("contact") || msg.includes("email") || msg.includes("hire")) {
    return `You can reach Prakash via the contact section on this page, or email him at prakash@example.com. He's open to opportunities from recruiters, startups, and technical teams.`;
  }

  return responses.default;
}

export const suggestedQuestions = [
  "Tell me about Prakash",
  "What projects has he built?",
  "What technologies does he use?",
  "What is his experience?",
];
