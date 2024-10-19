/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	// content: [
	// 	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	// 	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	// 	"./app/**/*.{js,ts,jsx,tsx,mdx}",
	// ],
	theme: {
		extend: {
			gridTemplateColumns: {
				13: "repeat(13, minmax(0, 1fr))",
			},
			colors: {
				blue: {
					400: "#bfa75d",
					500: "#bfa75d",
					600: "#bfa75d",
				},
			},
		},
		keyframes: {
			shimmer: {
				"100%": {
					transform: "translateX(100%)",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
