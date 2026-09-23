export const company = {
  name: "TechMatch LLC",
  brand: "TechMatch",
  email: "info@techmatchpartners.com",
  geography: "United States and Canada",
  providerCount: "500+",
  employeeRange: "50–5,000 employees",
};

export const navItems = [
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
] as const;

export const serviceGroups = [
  {
    eyebrow: "Secure & Protect",
    description: "Evaluate technology that protects systems, users, data, and business continuity.",
    services: [
      {
        title: "Cybersecurity",
        summary:
          "Help organizations evaluate security solutions across managed security, endpoint protection, network security, identity, compliance, and related cybersecurity services.",
        detail:
          "TechMatch helps define security requirements, compare provider approaches, coordinate demonstrations, and narrow the field to solutions that fit your risk profile, internal capacity, and operating environment.",
        keywords: "Cybersecurity vendor selection, managed security, endpoint protection, identity, compliance",
      },
      {
        title: "Backup & Disaster Recovery",
        summary:
          "Business continuity, backup, disaster recovery, data protection, and resilience solutions.",
        detail:
          "We help evaluate backup, recovery, continuity, and resilience options so your team can compare capabilities, service models, recovery expectations, and provider fit with less market noise.",
        keywords: "Backup, disaster recovery, business continuity, data protection",
      },
    ],
  },
  {
    eyebrow: "Connect & Communicate",
    description: "Source platforms and providers that keep teams, sites, and customers connected.",
    services: [
      {
        title: "Unified Communications (UCaaS)",
        summary: "Cloud phone systems, collaboration platforms, messaging, video, and unified communications.",
        detail:
          "TechMatch helps compare UCaaS platforms, collaboration requirements, migration considerations, user experience, calling needs, and provider support models.",
        keywords: "UCaaS consulting, unified communications advisory, cloud phone systems",
      },
      {
        title: "Contact Center (CCaaS)",
        summary:
          "Cloud contact center platforms, customer experience technology, workforce tools, and related solutions.",
        detail:
          "We help teams evaluate CCaaS platforms, customer experience workflows, integrations, reporting needs, workforce tools, and pricing structures.",
        keywords: "CCaaS consulting, contact center advisory, customer experience technology",
      },
      {
        title: "Connectivity & Telecom",
        summary: "Internet, network connectivity, SD-WAN, SASE, WAN, and telecommunications solutions.",
        detail:
          "TechMatch supports connectivity and telecom sourcing by helping compare providers, service footprints, technical requirements, proposals, and contract terms.",
        keywords: "Connectivity sourcing, telecom advisory, SD-WAN, SASE, WAN",
      },
    ],
  },
  {
    eyebrow: "Operate & Modernize",
    description: "Evaluate the platforms and managed services that support modern IT operations.",
    services: [
      {
        title: "Managed IT Services",
        summary: "MSPs, managed infrastructure providers, help desk solutions, and outsourced IT services.",
        detail:
          "We help organizations evaluate managed IT service providers, service coverage, escalation models, infrastructure support, help desk requirements, and ongoing management expectations.",
        keywords: "Managed IT services sourcing, MSP evaluation, outsourced IT services",
      },
      {
        title: "Cloud & Infrastructure",
        summary: "Cloud platforms, infrastructure services, hosting, data center, migration, and related solutions.",
        detail:
          "TechMatch helps compare cloud, hosting, infrastructure, data center, migration, and modernization options against operational needs and technical constraints.",
        keywords: "Cloud technology consulting, infrastructure advisory, hosting, migration",
      },
      {
        title: "Microsoft 365",
        summary: "Microsoft licensing, migrations, optimization, management, and supporting solutions.",
        detail:
          "We help evaluate Microsoft 365 licensing, migration support, management options, optimization opportunities, and adjacent solutions that support the Microsoft environment.",
        keywords: "Microsoft 365 licensing, migration, optimization, management",
      },
      {
        title: "AI Solutions",
        summary:
          "Practical AI platforms, providers, automation opportunities, and emerging enterprise AI technologies.",
        detail:
          "TechMatch helps organizations evaluate practical AI providers, automation opportunities, governance considerations, and emerging tools with a focus on business fit rather than hype.",
        keywords: "AI solutions advisory, enterprise AI platforms, automation opportunities",
      },
    ],
  },
  {
    eyebrow: "Advise & Optimize",
    description: "Reduce evaluation effort, improve comparison quality, and navigate commercial decisions.",
    services: [
      {
        title: "IT Strategy & Consulting",
        summary: "Technology planning, solution evaluation, modernization, and strategic technology initiatives.",
        detail:
          "TechMatch works alongside internal teams, executives, consultants, MSPs, and other stakeholders to support practical technology planning and solution evaluation.",
        keywords: "IT advisory services, technology planning, technology modernization",
      },
      {
        title: "Vendor Selection",
        summary: "Requirements gathering, provider identification, comparisons, demonstrations, and evaluation.",
        detail:
          "We help define requirements, identify appropriate providers, coordinate demonstrations, organize comparisons, and keep the selection process moving.",
        keywords: "Technology vendor selection, IT vendor selection, provider evaluation",
      },
      {
        title: "Contract Negotiation",
        summary: "Proposals, pricing, terms, renewals, and technology agreements.",
        detail:
          "TechMatch helps clients navigate proposals, pricing conversations, terms, renewals, and technology agreements so internal teams can make better-informed decisions.",
        keywords: "Technology contract negotiation, pricing evaluation, renewals",
      },
      {
        title: "IT Cost Optimization",
        summary:
          "Evaluate existing technology spend and identify opportunities for consolidation, optimization, or alternative solutions.",
        detail:
          "We help review technology spend, compare options, and identify potential areas for consolidation, optimization, or alternative approaches without guaranteeing savings.",
        keywords: "IT cost optimization, technology spend evaluation, vendor consolidation",
      },
    ],
  },
] as const;

export const allServices = serviceGroups.flatMap((group) =>
  group.services.map((service) => ({ ...service, group: group.eyebrow })),
);

export const processSteps = [
  {
    step: "1",
    title: "Understand",
    short: "We learn about your environment, priorities, requirements, and constraints.",
    detail:
      "The process starts with your business and technical requirements. TechMatch learns what you are trying to solve, what constraints matter, who needs to be involved, and what a practical outcome should look like.",
  },
  {
    step: "2",
    title: "Match",
    short: "We identify appropriate solutions and providers from our ecosystem of 500+ technology companies.",
    detail:
      "TechMatch narrows a crowded technology marketplace into a more manageable set of providers and solution approaches that align with your requirements, budget window, timing, and internal capacity.",
  },
  {
    step: "3",
    title: "Evaluate & Negotiate",
    short: "We help compare options, coordinate conversations, evaluate proposals, and navigate pricing.",
    detail:
      "We help keep demonstrations, proposal reviews, comparisons, stakeholder conversations, pricing discussions, and contract terms organized so your team can make an informed decision.",
  },
  {
    step: "4",
    title: "Implement & Support",
    short: "We stay involved through implementation and remain available as your technology needs evolve.",
    detail:
      "TechMatch does not disappear after a provider is selected. We remain engaged through implementation coordination and stay available as your environment, contracts, and priorities evolve.",
  },
] as const;

export const valuePillars = [
  {
    number: "01",
    title: "Save time",
    tone: "brand",
    description:
      "We handle vendor research, coordination, comparisons, and much of the legwork so internal teams can stay focused on their priorities.",
  },
  {
    number: "02",
    title: "Navigate complexity",
    tone: "accent",
    description:
      "We help turn a crowded technology marketplace into a manageable set of solutions aligned with the client's requirements.",
  },
  {
    number: "03",
    title: "Stay supported",
    tone: "mint",
    description:
      "Our involvement doesn't end when a provider is selected. TechMatch stays engaged through implementation and beyond.",
  },
] as const;

export const principles = [
  {
    title: "Client-first thinking",
    description: "Start with the organization's requirements rather than a specific technology provider.",
  },
  {
    title: "Efficiency",
    description: "Reduce the time internal teams spend researching, coordinating, and comparing vendors.",
  },
  {
    title: "Choice",
    description: "Use a broad ecosystem of 500+ providers to evaluate multiple approaches.",
  },
  {
    title: "Engagement",
    description: "Remain involved through evaluation, negotiation, implementation, and beyond.",
  },
  {
    title: "Relationships",
    description: "Operate as an extension of the client's team rather than another technology salesperson.",
  },
] as const;

export const faqs = [
  {
    question: "What does TechMatch do?",
    answer:
      "TechMatch helps companies define technology requirements, identify appropriate providers, compare options, navigate proposals, negotiate terms, coordinate purchasing, and stay supported during implementation.",
  },
  {
    question: "What types of technology can TechMatch help us evaluate?",
    answer:
      "TechMatch can help with cybersecurity, managed IT services, cloud and infrastructure, Microsoft 365, connectivity and telecom, UCaaS, CCaaS, backup and disaster recovery, IT strategy, vendor selection, contract negotiation, IT cost optimization, and practical AI solutions.",
  },
  {
    question: "What size companies does TechMatch work with?",
    answer:
      "TechMatch primarily works with organizations of approximately 50–5,000 employees.",
  },
  {
    question: "Do you work with companies across the United States and Canada?",
    answer:
      "Yes. TechMatch serves organizations throughout the United States and Canada.",
  },
  {
    question: "How many technology providers do you work with?",
    answer:
      "TechMatch works with an ecosystem of 500+ technology providers across a broad range of technology categories.",
  },
  {
    question: "Can TechMatch help negotiate pricing?",
    answer:
      "Yes. TechMatch helps clients navigate proposals, pricing, terms, renewals, and technology agreements.",
  },
  {
    question: "Can you work alongside our existing IT team or MSP?",
    answer:
      "Yes. TechMatch can work alongside existing internal IT teams, executives, consultants, MSPs, and other technology stakeholders.",
  },
  {
    question: "Do you stay involved during implementation?",
    answer:
      "Yes. TechMatch remains engaged through implementation and stays available as technology needs evolve.",
  },
  {
    question: "What if we already have vendors we're considering?",
    answer:
      "TechMatch can help evaluate vendors already under consideration, compare them with relevant alternatives, and support the decision process.",
  },
  {
    question: "Can TechMatch help with technology renewals or existing contracts?",
    answer:
      "Yes. TechMatch can help review renewals and existing technology agreements as part of pricing, terms, and optimization conversations.",
  },
] as const;

export const seoBase = {
  siteName: "TechMatch LLC",
  description:
    "TechMatch helps IT leaders identify, evaluate, negotiate, and implement the right technology solutions from 500+ providers.",
};

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const url = path.startsWith("http") ? path : `https://techmatchpartners.com${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "TechMatch" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
