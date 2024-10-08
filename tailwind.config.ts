import type { Config } from "tailwindcss";


const config: Config = {

  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',  // 1 second
        '1500': '1500ms',  // 1.5 seconds
      },
      
    },
  },
  
  plugins: [],
};
export default config;
