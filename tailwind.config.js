/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-blue": "var(--Moderate-blue)",
        "soft-red": "var(--Soft-Red)",
        "light-gray-blue": "var(--Light-grayish-blue)",
        "pale-red": "var(--Pale-red)",
        "dark-blue": "var(--Dark-blue)",
        "gray-blue": "var(--Grayish-Blue)",
        "light-gray": "var(--Light-gray)",
        "very-light-gray": "var(--Very-light-gray)",
        "white": "var(--White)",
      },
    },
  },
  plugins: [],
};
