export const solutionIcons = {
  bolt: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
    </svg>
  `,
  chart: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19h16v2H2V3h2v16zm4-2H6v-7h2v7zm6 0h-2V7h2v10zm6 0h-2v-5h2v5z"></path>
    </svg>
  `,
  shield: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.4 9.8-8 10-4.6-.2-8-5-8-10V6l8-4z"></path>
    </svg>
  `,
  tasks: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 11H7V9h2v2zm0 6H7v-2h2v2zm0-12H7V3h2v2zm14 1H11V4h12v2zm0 6H11v-2h12v2zm0 6H11v-2h12v2z"></path>
    </svg>
  `,
  users: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 11c1.7 0 3-1.3 3-3S17.7 5 16 5s-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v2h10v-2c0-1.4.6-2.7 1.6-3.7C10.7 13.1 9.4 13 8 13zm8 0c-.8 0-1.6.1-2.3.3 1.4 1.1 2.3 2.5 2.3 3.7v2h8v-2c0-2.7-5.3-4-8-4z"></path>
    </svg>
  `,
} as const;

export type SolutionIconKey = keyof typeof solutionIcons;
