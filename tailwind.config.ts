// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        h1: ['var(--font-cormorant)', 'serif'],
        h2: ['var(--font-lato)', 'sans-serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
