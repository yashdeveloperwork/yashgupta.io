// Single source of truth for personal details. Edit this file to update the site.
// Resume bullets support **bold** for emphasis.

export const site = {
  name: 'Yash Gupta',
  domain: 'yashgupta.io',
  title: 'Yash Gupta — Software Development Engineer',
  description:
    'Software Development Engineer at Target building backend systems for e-commerce and retail with Java, Spring Boot, Kafka and Redis. Resume and writing on backend engineering.',
  role: 'Software Development Engineer',
  tagline: 'I build the backend systems behind retail at scale.',
  intro:
    'Software Development Engineer at Target (Fortune 100), working on e-commerce and retail — backend services in Java and Spring Boot, event pipelines on Kafka, and the internal tools that keep large teams moving.',
  location: 'Bengaluru, India',
  email: 'yash.developer.work@gmail.com',
  links: {
    github: 'https://github.com/yashdeveloperwork',
    linkedin: '', // TODO: paste your LinkedIn profile URL to show it on the site
  },
};

export const about = [
  'I’m a backend engineer at Target, where I work on systems for e-commerce and retail. Recently that has meant a unified workflow dashboard that saves the team 250 hours a month and has enabled $1.5M in image reuse, and Spring Boot services made faster with pagination, Redis caching and Elasticsearch.',
  'Before Target I spent two years at EY building an API gateway and a notification platform for microservices, where I cared about routing, rate limiting, retries and failover. I started out at InMobi automating ad-campaign reporting for brands like Amazon, Google and Samsung.',
  'I studied Mechanical Engineering at BITS Pilani and moved into software through competitive programming (600+ problems solved). Away from the keyboard I play chess, with a peak rating of 2052.',
];

export const stats = [
  { value: '250 hrs', label: 'saved per month by a workflow dashboard' },
  { value: '$1.5M', label: 'saved through image reuse in 7 months' },
  { value: '55%', label: 'faster data retrieval with pagination + Redis' },
  { value: '2052', label: 'peak chess rating, top 1% worldwide' },
];

export type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: 'Software Development Engineer',
    org: 'Target',
    location: 'Bengaluru, Karnataka',
    period: 'Sep 2025 – Present',
    points: [
      'Used **Claude and OpenCode** to build a **unified workflow dashboard** in 2 weeks that consolidates project- and image-level status across multiple systems. It cut manual tracking and context switching, **saving 250 hours/month**, and enabled image reuse that **saved $1.5M in 7 months**.',
      'Made data retrieval **55% faster** and page loads **30% faster** by adding pagination with **Java Spring Boot and JPA**, backed by a **Redis cache** that cut database reads by **60%**.',
      'Used **Kafka** for asynchronous processing and **Temporal** for scheduling to deliver notifications reliably and on time under **high-volume traffic**, with low latency and strong fault tolerance.',
      'Improved system performance with **multi-threading** and **Elasticsearch**.',
    ],
  },
  {
    title: 'Software Development Engineer (Backend)',
    org: 'Ernst & Young',
    location: 'Bengaluru, Karnataka',
    period: 'Jul 2023 – Sep 2025',
    points: [
      'Built and deployed an **API gateway in Java Spring Boot** handling request routing, authentication, load balancing and rate limiting for secure, efficient communication between **microservices**.',
      'Wrote the **low-level and high-level design (LLD/HLD)** for a scalable email notification service in **Java Spring Boot**, following **SOLID principles**.',
      'Improved performance and reliability with **retry mechanisms**, **failover strategies** and monitoring.',
    ],
  },
  {
    title: 'Development Intern',
    org: 'InMobi',
    location: 'Bengaluru, Karnataka',
    period: 'Jul 2022 – Dec 2022',
    points: [
      '**Led automation for the GCPL campaign**, designing and building a process that improved efficiency by **45%**.',
      'Automated daily and weekly reports with **Visual Basic, SQL and Python**, saving up to **55%** of the time.',
      'Managed campaigns for brands including **Amazon, Google, Samsung and Swiggy**.',
    ],
  },
];

export const education = [
  {
    school: 'Birla Institute of Technology & Science (BITS), Pilani',
    degree: 'B.E. in Mechanical Engineering · CGPA 7.7',
    period: 'Aug 2019 – May 2023',
  },
  {
    school: 'Alwar Public School, Alwar',
    degree: 'Science stream · 10th: CGPA 9.6 · 12th: 92%',
    period: '2017, 2019',
  },
];

export const projects = [
  {
    name: 'Future trends of WEEE (e-waste) from smartphones',
    meta: 'Matlab, Python · with Prof. Vinay Chamola, BITS Pilani',
    period: 'Aug 2021 – Jan 2022',
    points: [
      'Built a **forecasting model** to estimate future smartphone e-waste in India.',
      'Used the **Gompertz model** and **logistic curves** to produce realistic forecasts.',
    ],
  },
];

export const achievements = [
  'Received the **Rising Star Award** at InMobi for noteworthy potential and performance.',
  'Solved **600+ competitive programming problems** on Codeforces, CodeChef, LeetCode and GeeksforGeeks.',
  'Ranked in the **top 1%** in JEE Mains.',
  'Reached a **peak chess rating of 2052**, in the top 1% worldwide.',
  'Scored **326 in BITSAT**, earning admission to BITS Pilani.',
  'As **Alumni Research Talks Coordinator** for the Computer Science Association (2020–2023), ran **10 talks** averaging **250 attendees** (participation up 45%) and mentored students in machine learning and web development.',
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'TypeScript', 'Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['Spring Boot', 'JPA', 'React', 'Angular', 'Django', 'Node.js'] },
  { group: 'Systems', items: ['Microservices', 'Kafka', 'Temporal', 'Redis', 'Elasticsearch', 'API gateways'] },
  { group: 'Platform', items: ['Docker', 'Kubernetes', 'JDBC', 'Monitoring'] },
  { group: 'Foundations', items: ['Data structures & algorithms', 'OOP', 'DBMS', 'Operating systems', 'LLD / HLD'] },
  { group: 'AI tooling', items: ['Claude', 'OpenCode'] },
];
