import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'shared.button',
	type: 'object',
	fields: [
		defineField({ name: 'label', title: 'Label', type: 'string' }),
		defineField({ name: 'link', title: 'Link', type: 'url' }),
	],
})
