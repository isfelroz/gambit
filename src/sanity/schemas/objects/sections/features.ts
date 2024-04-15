import { defineType, defineField } from 'sanity'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'

export default defineType({
	name: 'section.features',
	type: 'object',
	icon: MdOutlineFeaturedPlayList,
	fields: [
		defineField({
			name: 'columns',
			title: 'Columns per row',
			type: 'number',
			initialValue: 3,
			options: {
				list: [
					{ title: '2', value: 2 },
					{ title: '3', value: 3 },
					{ title: '4', value: 4 },
					{ title: '6', value: 6 },
				], // <-- predefined values
			},
		}),
		defineField({ name: 'title', type: 'string', title: 'Section title' }),
		defineField({
			name: 'items',
			type: 'array',
			of: [defineField({ name: 'features', title: 'Features', type: 'shared.feature' })],
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Features',
			}
		},
	},
})
