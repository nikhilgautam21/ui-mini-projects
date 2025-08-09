export const projectsList = [
  { id: 'carousel', name: 'Carousel', link: '/carousel', icon: 'Image' },
  { id: 'accordion', name: 'Accordion', link: '/accordion', icon: 'List' },
  { id: 'tabs', name: 'Tabs', link: '/tabs', icon: 'Table' },
];

export const accordionList = [
  {
    title: 'What is Prettier and why use it?',
    content:
      'Prettier is an opinionated code formatter that enforces a consistent style across your codebase by parsing your code and reprinting it with its own rules. Use it to avoid style debates and ensure readable, consistent files.',
    expanded: true,
  },
  {
    title: 'How to run Prettier locally?',
    content:
      'Install Prettier as a dev dependency (npm i -D prettier), add a script like "format": "prettier --write \\"src/**/*.{js,jsx,ts,tsx,json,css,md}\\"", then run npm run format to auto-format files.',
    expanded: false,
  },
  {
    title: 'Should I use Prettier with ESLint?',
    content:
      'Yes — Prettier handles formatting while ESLint handles code quality and potential bugs. Use eslint-config-prettier to disable conflicting ESLint formatting rules, and optionally eslint-plugin-prettier to surface formatting issues as lint errors.',
    expanded: false,
  },
  {
    title: 'What files should I ignore?',
    content:
      'Add node_modules, build/dist folders, lockfiles, and generated assets to .prettierignore so Prettier skips large or compiled files (examples: node_modules, dist, build, coverage, yarn.lock).',
    expanded: false,
  },
  {
    title: 'How to enable format-on-save in VS Code?',
    content:
      'Install the Prettier extension, set it as the default formatter, and enable "Editor: Format On Save" in settings. This makes VS Code auto-format files with Prettier whenever you save.',
    expanded: false,
  },
];

export const tabConfig = [
  {
    id: 'overview',
    label: 'Overview',
    content: `
      Welcome to our product!  
      This tab gives you a quick summary of what the product is, 
      who it’s for, and why you should care.  
      You’ll find links to key resources, 
      a short getting started guide, and a high-level feature list.
    `,
    icon: '📄',
  },
  {
    id: 'features',
    label: 'Features',
    content: `
      Our product offers a range of powerful features:
      - Real-time collaboration with team members
      - Offline mode for working without internet
      - Fully customizable UI themes
      - AI-powered search to find content instantly
      These features are designed to save time and boost productivity.
    `,
    icon: '✨',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    content: `
      We offer flexible plans:
      1. Free: Perfect for individuals getting started
      2. Pro ($9/month): For small teams that need extra features
      3. Enterprise (Custom pricing): Tailored for large organizations
      All plans come with 24/7 customer support and a 14-day free trial.
    `,
    icon: '💰',
  },
  {
    id: 'contact',
    label: 'Contact',
    content: `
      Need help or want to chat?  
      Reach us via:
      - Email: support@example.com
      - Phone: +1 (800) 123-4567
      - Live chat: Available in-app  
      We usually respond within 24 hours.
    `,
    icon: '📞',
  },
];
