/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
   	
			container: {
				center: true,
				padding: "15px",
			},
				screens: {
					sm: "640px",
					md:"768px",
					lg: "960px",
					xl: "1200px"
				},
				fontFamily: {
					primary: "var(--font-dmSans)",
					secondary: "var(--font-barlow)",
				},
			extend: {
				colors: {
					primary: "#121315",
					secondary: "#666666",
					accent: "ffca3b",
					border: "d7d7d7",
				},
				boxShadow: {
					cistom: "10px 4px 54px 10px rgba(18, 19, 21, 0.06)",
				},
				backgroundImage: {
					hero: "url('/assets/img/hero/bg1.jpg')",
				}
			},
   },
  plugins: [require("tailwindcss-animate")],
};