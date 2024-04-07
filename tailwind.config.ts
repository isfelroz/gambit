import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			fontFamily: {
				strawford: 'var(--strawford)',
			},
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				default: 'var(--text-color)',
				background: 'var(--bg-color)',
				'background-alt': 'var(--bg-alt-color)',
				highlight: 'var(--highlight-color)',
				'highlight-alt': 'var(--highlight-alt-color)',
				'btn-bg': 'var(--button-bg-color)',
				'btn-bg-hover': 'var(--button-bg-hover-color)',
				'btn-text': 'var(--button-text-color)',
				'btn-text-hover': 'var(--button-text-hover-color)',
				link: 'var(--link-color)',
				'link-hover': 'var(--link-hover-color)',
				'h1-color': 'var(--h1-color)',
				'h2-color': 'var(--h2-color)',
				'h3-color': 'var(--h3-color)',
				'h4-color': 'var(--h4-color)',
				'p-color': 'var(--p-color)',
			},
			fontSize: {
				h1: [
					'var(--h1-size)',
					{
						lineHeight: 'var(--h1-leading)',
						fontWeight: 'var(--h1-weight)',
					},
				],
				h2: [
					'var(--h2-size)',
					{
						lineHeight: 'var(--h2-leading)',
						fontWeight: 'var(--h2-weight)',
					},
				],
				watermark: [
					'clamp(80px, 11vw, 200px)',
					{
						fontWeight: '500',
					},
				],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
