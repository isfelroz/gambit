import { FaAlignLeft } from 'react-icons/fa'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'form',
    title: 'Forms',
    type: 'document',
    icon: FaAlignLeft,
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'submitte',
            title: 'Submitte Label',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'form',
            title: 'Form Fields',
            type: 'shared.formFields',
        }),
    ],
})
