import { SlDocs } from 'react-icons/sl'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'blog',
	title: 'Blog',
	type: 'document',
	icon: SlDocs,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: 'title',
			description: 'This field is the title of your personal website.',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
	],
})
