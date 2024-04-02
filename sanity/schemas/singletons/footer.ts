import { TbBoxAlignBottom } from 'react-icons/tb'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'footer',
	title: 'Footer',
	type: 'document',
	icon: TbBoxAlignBottom,
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
