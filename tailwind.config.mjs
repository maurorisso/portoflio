/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#96CD79',
				foreground: "#23262F",
				background: "#17181C",
				white: "#fbf6ef",
			},
			fontFamily: {
				'bricolage': ['Bricolage Grotesque', 'sans-serif'],


			},
		},
	},
	plugins: [],
}
