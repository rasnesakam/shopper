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
			'xs': '320px', // eğer ekran genişliği 320px ten uzunsa
			// => @media (min-width: 320px) { ... }

			'sm': '425px', // eğer ekran genişliği 425px ten uzunsa
			// => @media (min-width: 425px) { ... }

			'md': '768px', // eğer ekran genişliği 768px ten uzunsa
			// => @media (min-width: 768px) { ... }

			'lg': '1024px', // eğer ekran genişliği 1024px ten uzunsa
			// => @media (min-width: 1024px) { ... }

			'xl': '1440px', // eğer ekran genişliği 1440px ten uzunsa
			// => @media (min-width: 1440px) { ... }

			'4k': '2560px', // eğer ekran genişliği 1440px ten uzunsa
			// => @media (min-width: 1440px) { ... }
		}
	},
  },
  plugins: [],
}
