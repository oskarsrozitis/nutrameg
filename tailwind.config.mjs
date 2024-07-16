/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Young Serif"', 'serif'],
			},
			boxShadow: {
				'inner': 'inset 0px 10px 10px 0px rgba(81, 135, 109, 1)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
}
