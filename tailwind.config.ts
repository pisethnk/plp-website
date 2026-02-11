import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gov-blue': '#002366',
        'gov-gold': '#D4AF37',
        'vibrant-teal': '#14b8a6',
        'vibrant-amber': '#f59e0b',
        'vibrant-red': '#ef4444',
        'elementary-green': '#4ade80',
        'elementary-sky': '#38bdf8',
      },
    },
  },
  plugins: [],
};
export default config;
