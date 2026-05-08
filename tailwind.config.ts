import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './APP.tsx',
    './main.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'brand-accent': '#ff2a00',
        'brand-line': 'rgba(255, 255, 255, 0.1)',
        'brand-bg': '#050505',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
