export const projectsList = [
  { id: 'carousel', name: 'Carousel', link: '/carousel', icon: 'Image' },
  { id: 'accordion', name: 'Accordion', link: '/accordion', icon: 'List' },
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
