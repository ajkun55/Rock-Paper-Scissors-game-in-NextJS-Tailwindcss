/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "Scissors-1": "hsl(39, 89%, 49%)",
      "Scissors-2": "hsl(40, 84%, 53%)",
      "Paper-1": "hsl(230, 89%, 62%)",
      "Paper-2": "hsl(230, 89%, 65%)",
      "Rock-1": "hsl(349, 71%, 52%)",
      "Rock-2": "hsl(349, 70%, 56%)",
      "Lizard-1": "hsl(261, 73%, 60%)",
      "Lizard-2": "hsl(261, 72%, 63%)",
      "Cyan-1": "hsl(189, 59%, 53%)",
      "Cyan-2": "hsl(189, 58%, 57%)",
      "Dark-Text": "hsl(229, 25%, 31%)",
      "Score-Text": "hsl(229, 64%, 46%)",
      "Header-Outline": "hsl(217, 16%, 45%)",
      "bg-1": "hsl(214, 47%, 23%)",
      "bg-2": "hsl(237, 49%, 15%)",
      white: "hsl(0,0%,100%)",
    },
    extend: {
      backgroundImage: {
        "bg-triangle": "url('/bg-triangle.svg')",
        "bg-pentagon": "url('/bg-pentagon.svg')",
      },
      backgroundSize: {
        18: "190px",
        24: "240px",
        30: "300px",
      },
    },
  },
  plugins: [],
};
