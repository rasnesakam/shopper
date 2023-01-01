/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
	"./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
		colors: {
			primary: "#F26419",
			secondary: "#216477",
			ground:"#fefefe",
		},
		screens:{
			'sm': '576px', // eğer ekran genişliği 567px ten uzunsa
			// => @media (min-width: 576px) { ... }

			'md': '960px', // eğer ekran genişliği 960px ten uzunsa
			// => @media (min-width: 960px) { ... }

			'lg': '1440px', // eğer ekran genişliği 1440px ten uzunsa
			// => @media (min-width: 1440px) { ... }
		}
	},
  },
  plugins: [],
}
