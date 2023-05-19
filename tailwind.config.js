/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: "Poppins",
			},
			container: {
				center: true,
				padding: "16px",
			},
			colors: {
				primary: "#F6F1E9",
				font: "#4F200D",
				secondary: "#FFD93D",
				bar: "#FF8400",
			},
			screens: {
				"2xl": "1320px",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
