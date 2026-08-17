export type ConsultingPlan = {
  slug: "website-launch" | "website-partnership" | "technology-consulting";
  name: string;
  tagline: string;
  regularPrice?: string;
  foundingPrice?: string;
  consultation?: {
    regularPrice: string;
    foundingPrice: string;
    credit: string;
  };
  features: string[];
  bestFor: string;
  scopeNote?: string;
  cta: string;
};

export const consultingPlans: ConsultingPlan[] = [
  {
    slug: "website-launch",
    name: "Website Launch",
    tagline: "Build it for me.",
    regularPrice: "$750 setup + $90/month",
    foundingPrice: "$300 setup + $60/month",
    features: ["Custom responsive website with 5–7 core pages", "Contact forms, basic SEO, analytics, and domain connection", "Managed hosting, deployment, monitoring, and maintenance", "Reasonable minor content updates within the existing site structure"],
    bestFor: "Organizations that need a professional website built, launched, and managed without assembling a separate technical team.",
    scopeNote: "Website Launch includes a 12-month managed-service term. CMS, payments, member areas, authentication, custom integrations, and advanced functionality are available when appropriate and scoped separately before work begins.",
    cta: "Get Started",
  },
  {
    slug: "website-partnership",
    name: "Website Partnership",
    tagline: "Keep your website in good hands.",
    regularPrice: "$90/month",
    foundingPrice: "$60/month",
    consultation: {
      regularPrice: "$150",
      foundingPrice: "$100",
      credit: "$60 credit toward the first partnership invoice when you enroll within 30 days.",
    },
    features: ["Managed hosting support, monitoring, maintenance, and core functionality checks", "Reasonable minor content updates within the existing site structure", "Practical recommendations and a consistent technical point of contact"],
    bestFor: "Organizations with an existing website that want a responsive, trusted technical partner.",
    scopeNote: "Starts with a paid consultation and high-level review. Larger improvements, repairs, redesigns, applications, payments, CMS work, authentication, and integrations are separately scoped.",
    cta: "Get Started",
  },
  {
    slug: "technology-consulting",
    name: "Technology Consulting",
    tagline: "Help us solve something more technical.",
    features: ["Microsoft and cloud services guidance", "Technology planning and vendor evaluation", "Web and cloud integrations or automation", "Troubleshooting and custom web solutions"],
    bestFor: "Teams facing a specific technical decision, integration, automation, cloud, hardware, or web-development challenge.",
    cta: "Discuss a Project",
  },
];

export const consultingAvailability = {
  acceptingClients: true,
  quarter: "Q4 2026",
  totalSpots: 4,
  reservedSpots: 1,
} as const;

export function getConsultingPlan(slug?: string | null) {
  return consultingPlans.find((plan) => plan.slug === slug);
}
