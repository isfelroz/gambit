module.exports = {
	plugins: {
		'tailwindcss/nesting': 'postcss-nesting',
		tailwindcss: {},
		'postcss-preset-env': {
			browsers: ['last 3 version'],
			features: {
				'nesting-rules': false,
				'custom-selectors': { preserve: false },
			},
		},
	},
}
