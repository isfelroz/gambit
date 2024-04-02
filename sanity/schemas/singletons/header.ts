import { TbBoxAlignTop } from 'react-icons/tb'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'header',
	title: 'Header',
	type: 'document',
	icon: TbBoxAlignTop,
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
