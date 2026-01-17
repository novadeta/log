/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./content/**/*.{md,mdx}",
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: "#e4e4e7",       
              h1: { color: "#fafafa" },
              h2: { color: "#fafafa" },
              h3: { color: "#fafafa" },
              a: {
                color: "#93c5fd",
                '&:hover': { color: "#bfdbfe" },
              },
              code: {
                color: "#a5f3fc",
                backgroundColor: "#18181b",
                padding: "0.2em 0.4em",
                borderRadius: "0.25rem",
              },
              pre: {
                backgroundColor: "#09090b",
              },
              blockquote: {
                color: "#a1a1aa",
                borderLeftColor: "#3f3f46",
              },
            },
          },
        },
      },
    },
  }
  