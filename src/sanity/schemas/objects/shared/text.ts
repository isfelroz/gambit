import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'shared.text',
	type: 'object',
	fields: [
		defineField({
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			title: 'Buttons',
			name: 'links',
			type: 'navigation',
		}),
	],
})
