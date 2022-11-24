/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-red": "#8F0930",
				"secondary-red": "#4D041B",
				sand: "#E7DEDE",
			},
		},
	},
	plugins: [],
};
