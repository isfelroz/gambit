import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'navigation',
	type: 'array',
	of: [
		defineField({
			name: 'internal',
			type: 'object',
			title: 'Internal link',
			fields: [
				defineField({
					name: 'label',
					title: 'Label',
					type: 'string',
				}),
				defineField({
					title: 'Reference',
					name: 'reference',
					type: 'reference',
					to: [
						{
							type: 'home',
						},
						{
							type: 'page',
						},
						{
							type: 'blog',
						},
					],
				}),
			],
		}),
		defineField({
			name: 'external',
			title: 'External link',
			type: 'object',
			fields: [
				defineField({
					name: 'label',
					title: 'Label',
					type: 'string',
				}),
				defineField({
					title: 'Link',
					name: 'link',
					type: 'url',
				}),
			],
		}),
	],
})
