// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sans: ['var(--font-cormorant)', 'ui-sans-serif', 'system-ui'],
      serif: ['var(--font-lato)', 'ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [],
};
