// All site content lives here. Edit this file to update the page;
// the layout in src/pages/index.astro reads from it.
// Source of truth for every claim: career-ops/cv.md. Don't add metrics that aren't there.

export const profile = {
  name: 'Adrian Rodriguez',
  role: 'Software Engineer · SDET',
  tagline:
    'Python & FastAPI backends, backed by pytest suites and CI, with LLMs integrated safely.',
  location: 'Hackensack, NJ · Open to relocation',
  email: 'arodr223@outlook.com',
  resume: '/Adrian_Rodriguez_Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/rpiarodriguez/',
    github: 'https://github.com/typicaladrian',
  },
};

export type Line = {
  role: string;
  org: string;
  detail?: string;
  href?: string;
};

export const now: Line[] = [
  {
    role: 'Building',
    org: 'Zero-Trust AI Edge Gateway',
    detail: 'PII-redacting LLM proxy',
    href: '#zero-trust-gateway',
  },
  {
    role: 'M.S. Cybersecurity & Information Assurance',
    org: 'WGU',
    detail: 'expected June 2027',
  },
  { role: 'Branch Ambassador', org: 'Capital One' },
];

export const previously: Line[] = [
  {
    role: 'SDET Intern',
    org: 'Gilbarco Veeder-Root',
    detail: 'remote regression-test access for 40–50 fuel systems',
  },
  {
    role: 'Full-Stack Developer & Scrum Lead',
    org: 'RCOS @ RPI',
    detail: 'teams of 5–15',
  },
  {
    role: 'B.S. Computer Science',
    org: 'Rensselaer Polytechnic Institute',
    detail: '2024',
  },
];

export const certifications = [
  { name: 'CompTIA CySA+', year: '2026' },
  { name: 'ISC2 CC', year: '2025' },
];

export const toolkit = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'pytest',
  'GitHub Actions',
  'Docker',
  'Linux',
  'TypeScript',
  'React',
  'Next.js',
  'LLM integration',
];

export type Project = {
  id: string;
  title: string;
  when: string;
  pitch: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href: string; primary?: boolean }[];
  visual: 'redaction' | 'screenshot' | 'triage';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'zero-trust-gateway',
    title: 'Zero-Trust AI Edge Gateway',
    when: '2026 – present',
    pitch:
      'A FastAPI proxy that strips client PII from prompts before they reach cloud LLMs, then restores it in the reply.',
    highlights: [
      '91.4% strict recall on 187 hand-labeled entities across 5 real contracts',
      '86-test pytest suite mapping each security guarantee to a test, with GitHub Actions CI',
      'Layered redaction: regex rules, hashed client allowlist, GLiNER2 zero-shot NER',
    ],
    tags: ['FastAPI', 'Python', 'Docker', 'pytest', 'GLiNER2', 'Linux'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/typicaladrian/zero-trust-llm-firewall',
        primary: true,
      },
    ],
    visual: 'redaction',
    featured: true,
  },
  {
    id: 'secure-ops-scheduler',
    title: 'Secure Ops Scheduling Platform',
    when: '2026',
    pitch:
      'Turns plain-English manager requests into bank-branch schedules that satisfy every staffing and security rule.',
    highlights: [
      'OR-Tools CP-SAT solves 11 hard-constraint types; a 6-person week in under 0.5 s',
      'Gemini agent limited to typed tool calls, bound server-side to the caller’s branch',
      '41 pytest tests covering token forgery, cross-tenant access and solver correctness',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'OR-Tools', 'Gemini', 'Next.js'],
    links: [
      { label: 'Live demo', href: 'https://aischeduler.typicaladrian.dev', primary: true },
      { label: 'GitHub', href: 'https://github.com/typicaladrian/Business_Schedule_Maker' },
    ],
    visual: 'screenshot',
  },
  {
    id: 'security-triage',
    title: 'Automated Security Triage',
    when: '2026',
    pitch:
      'A Python utility that reads security-exception tickets from Jira and flags the incomplete ones automatically.',
    highlights: [
      'Pulls open tickets with JQL through the Jira REST API',
      'A local LLM (Ollama) checks each for a business justification and technical details, so ticket data stays on the machine',
      'Comments to the reporter with what’s missing and moves the ticket along',
    ],
    tags: ['Python', 'Jira REST API', 'Ollama'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/typicaladrian/jira-sec-exception-handler',
        primary: true,
      },
    ],
    visual: 'triage',
  },
];
