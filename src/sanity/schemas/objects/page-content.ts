import { defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'pagecontent',
	type: 'array',
	of: [{ type: 'section.hero' }, { type: 'section.twocolumns' }],
})
