import { FaRegMap } from 'react-icons/fa6'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'sitemap',
	title: 'Sitemap',
	type: 'document',
	icon: FaRegMap,
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
