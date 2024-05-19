import { defineType, defineField } from 'sanity'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import FeaturesLayoutInput from '@/sanity/inputs/features-layout-input'

export default defineType({
	name: 'section.features',
	type: 'object',
	icon: MdOutlineFeaturedPlayList,
	fields: [
		defineField({
			name: 'columns',
			title: 'Columns per row',
			type: 'string',
			components: {
				input: FeaturesLayoutInput,
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
