// Single source of truth for personal details. Edit this file to update the site.

export const site = {
  name: 'Yash Gupta',
  domain: 'yashgupta.io',
  title: 'Yash Gupta — Software Developer',
  description:
    'Software developer at a Fortune 100 company, building e-commerce and retail systems at scale. Notes on commerce engineering, distributed systems and the craft of shipping.',
  role: 'Software Developer',
  tagline: 'I build the systems behind shopping at scale.',
  intro:
    'Software developer at a Fortune 100 company, working on e-commerce and retail — the carts, catalogs, checkouts and services that millions of customers touch every day.',
  location: 'United States',
  email: 'yash.developer.work@gmail.com',
  links: {
    github: 'https://github.com/yashdeveloperwork',
    linkedin: 'https://www.linkedin.com/in/', // TODO: add your LinkedIn handle
  },
};

export const about = [
  'I work where software meets retail: high-traffic storefronts, product and pricing data, order pipelines, and the services that keep them fast and correct during the busiest days of the year.',
  'I care about systems that stay boring under load, code that the next engineer can read, and measuring whether a change actually moved the needle for customers.',
  'This site is where I keep my resume and write about what I learn along the way.',
];

export type Role = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

// TODO: replace with your real history.
export const experience: Role[] = [
  {
    title: 'Software Developer',
    org: 'Fortune 100 company · E-commerce & Retail',
    period: 'Present',
    points: [
      'Build and operate customer-facing e-commerce services used by millions of shoppers.',
      'Work across catalog, cart and checkout flows, balancing performance, reliability and conversion.',
      'Partner with product, design and operations teams to ship features for peak retail events.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { group: 'Backend', items: ['Microservices', 'REST & GraphQL APIs', 'Event-driven systems', 'Caching'] },
  { group: 'Frontend', items: ['React', 'Web performance', 'Accessibility'] },
  { group: 'Platform', items: ['Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Observability'] },
  { group: 'Domain', items: ['E-commerce', 'Retail', 'Checkout & payments', 'Catalog & search'] },
];
