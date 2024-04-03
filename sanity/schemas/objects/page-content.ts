import { defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'pagecontent',
	type: 'array',
	of: [defineArrayMember({ type: 'section.hero' })],
})
