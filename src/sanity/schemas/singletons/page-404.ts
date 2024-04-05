import { RiErrorWarningLine } from 'react-icons/ri'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'page404',
	title: '404 Page',
	type: 'document',
	icon: RiErrorWarningLine,
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
