import { CogIcon } from '@sanity/icons'
import { FaAlignLeft } from 'react-icons/fa'
import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'form',
	title: 'Forms',
	type: 'document',
	icon: FaAlignLeft,
	groups: [
		{
			name: 'forminfo',
			title: 'Info',
			icon: CogIcon, // optional
			default: true, // optional, defaults to false
		},
		{
			name: 'formcontent',
			title: 'Form',
			icon: CogIcon, // optional
		},
		{
			name: 'formmail',
			title: 'Mail',
			icon: CogIcon, // optional
		},
		{
			name: 'formresponse',
			title: 'Response',
			icon: CogIcon, // optional
		},
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'forminfo',
			validation: (rule) => rule.required(),
		}),
		defineField({
			// should match 'languageField' plugin configuration setting, if customized
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
		defineField({
			name: 'formid',
			title: 'ID',
			type: 'slug',
			group: 'forminfo',
			options: {
				source: (doc, options) => {
					return `${Date.now()}`
				},
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'submit',
			title: 'Submit Label',
			type: 'string',
			group: 'formcontent',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'form',
			title: 'Form Fields',
			type: 'shared.formFields',
			group: 'formcontent',
		}),
		defineField({
			name: 'mail',
			type: 'object',
			title: 'Mail Fields',
			group: 'formmail',
			fields: [
				defineField({
					name: 'from',
					title: 'From',
					type: 'string',
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: 'to',
					title: 'To',
					type: 'string',
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: 'reply',
					title: 'Reply',
					type: 'string',
				}),
				defineField({
					name: 'subject',
					title: 'Subject',
					type: 'string',
				}),
				defineField({
					name: 'body',
					title: 'Body',
					type: 'array',
					of: [{ type: 'block' }],
				}),
			],
		}),
		defineField({
			name: 'response',
			type: 'object',
			title: 'Response message',
			group: 'formresponse',
			fields: [
				defineField({
					name: 'success',
					title: 'Success message',
					type: 'string',
					initialValue: 'success',
				}),
				defineField({
					name: 'wrning',
					title: 'Warning message',
					type: 'string',
					initialValue: 'warning',
				}),
				defineField({
					name: 'error',
					title: 'Error message',
					type: 'string',
					initialValue: 'error',
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			language: 'language',
		},
		prepare(select) {
			const { title, language } = select
			return {
				title,
				subtitle: language.toUpperCase() ?? 'Undefined',
			}
		},
	},
})
