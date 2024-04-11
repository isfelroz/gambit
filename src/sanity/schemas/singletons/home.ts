import { HomeIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    icon: HomeIcon,
    // Uncomment below to have edits publish automatically as you type
    // liveEdit: true,
    groups: [
        {
            name: 'info',
            title: 'Info',
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'sections',
            type: 'pagecontent',
            title: 'Sections',
            group: 'content',
        }),
        defineField({
            name: 'seo',
            type: 'shared.seo',
            title: 'SEO',
            group: 'seo',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                subtitle: 'Home',
                title,
            }
        },
    },
})
