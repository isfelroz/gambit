import { IoDesktopOutline } from 'react-icons/io5'

import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Pages',
	type: 'document',
	icon: IoDesktopOutline,
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
