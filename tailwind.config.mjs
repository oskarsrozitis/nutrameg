/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.4rem',
			'2xl': '1.8rem',
			'3xl': '2.2rem',
			'4xl': '2.6rem',
			'5xl': '3rem',
		},
		extend: {
			fontFamily: {
				serif: ['"Young Serif"', 'serif'],
			},
			boxShadow: {
				'inner': 'inset 0px 10px 10px 0px rgba(81, 135, 109, 1)',
			},
			lineHeight: {
				'extra-loose': '2.5',
				'12': '4rem',
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
}
