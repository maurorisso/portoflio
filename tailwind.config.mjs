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
			animation: {
				marquee: 'marquee 10s linear infinite',
				marquee2: 'marquee2 10s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				}
			},
		},

	},
	plugins: [
		require('daisyui'),
	],
}
