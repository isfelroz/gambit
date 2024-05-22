// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.

import {
	type Divider,
	type ListItemBuilder,
	type StructureResolver,
	type StructureBuilder,
} from 'sanity/structure'
import { type WebStructure } from '../types'
import { i18n } from '../../i18n-config'

export const webStructure = (): StructureResolver => {
	return (S) => {
		return S.list()
			.title('Content')
			.items([
				S.divider(),
				translateDocumentStructure(S, 'project'),
				// S.documentTypeListItem('project'),
				S.divider(),
				translateDocumentStructure(S, 'page'),
				// translateSingletonStructure(S, 'home'),
				S.documentTypeListItem('home').child(
					S.editor().id('home').schemaType('home').documentId('home')
				),
				// S.documentTypeListItem('page404').child(
				// 	S.editor().id('page404').schemaType('page404').documentId('page404')
				// ),
				S.divider(),
				S.documentTypeListItem('header').child(
					S.editor().id('header').schemaType('header').documentId('header')
				),
				S.documentTypeListItem('footer').child(
					S.editor().id('footer').schemaType('footer').documentId('footer')
				),
				S.divider(),
				S.documentTypeListItem('settings').child(
					S.editor().id('settings').schemaType('settings').documentId('settings')
				),
				S.divider(),
				translateDocumentStructure(S, 'form'),
				// S.documentTypeListItem('redirections').child(
				// 	S.editor().id('redirections').schemaType('redirections').documentId('redirections')
				// ),
				// S.listItem()
				//     .title('Settings')
				//     .child(
				//         S.list()
				//             // Sets a title for our new list
				//             .title('Settings Documents')
				//             // Add items to the array
				//             // Each will pull one of our new singletons
				//             .items([
				//                 // ...S.documentTypeListItems(),
				//                 S.documentTypeListItem('settings').child(S.editor().id('settings').schemaType('settings').documentId('settings')),
				//                 S.documentTypeListItem('home').child(S.editor().id('home').schemaType('home').documentId('home')),
				//             ])
				//     ),
				// We also need to remove the new singletons from the main list
				// ...S.documentTypeListItems().filter((listItem) => !['siteSettings', 'colors', 'navigation'].includes(listItem.getId())),
			])
	}
}

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (arrayStructure: WebStructure[]): StructureResolver => {
	return (S) => {
		const items: (Divider | ListItemBuilder)[] = arrayStructure.map(
			({ schemaType, singleton = false, definition = null }) => {
				if (schemaType == 'divider') return S.divider()
				if (!singleton || !definition) return S.documentTypeListItem(schemaType)

				return S.listItem()
					.title(definition.title!)
					.icon(definition.icon)
					.child(
						S.editor().id(definition.name).schemaType(definition.name).documentId(definition.name)
					)
			}
		)

		return S.list().title('Content').items(items)
	}
}

function translateDocumentStructure(S: StructureBuilder, schemaType: string): ListItemBuilder {
	return S.documentTypeListItem(schemaType).child(
		S.list()
			.title(S.documentTypeListItem(schemaType).getTitle() ?? '')
			.items([
				...i18n.languages.map((language) =>
					S.listItem()
						.title(`${language.id.toLocaleUpperCase()}`)
						.schemaType(schemaType)
						.child(
							S.documentList()
								.id(language.id)
								.title(`${language.title}`)
								.schemaType(schemaType)
								.filter(`_type == "${schemaType}" && language == $language`)
								.params({ language: language.id })
								.initialValueTemplates([
									S.initialValueTemplateItem(`${schemaType}-language`, {
										id: `${schemaType}-language`,
										language: language.id,
									}),
								])
								.canHandleIntent((intentName, params) => {
									// TODO: Handle **existing** documents (like search results when clicked)
									// to return `true` on the correct language list!
									if (intentName === 'edit') {
										// return params?.language === language.id
										return false
									}
									// Not an initial value template
									if (!params.template) {
										return true
									}
									// Template name structure example: "lesson-en"
									const languageValue = params?.template?.split(`-`).pop()
									return languageValue === language.id
								})
						)
				),
				// I have only added this item so that search results when clicked will load this list
				// If the intent checker above could account for it, I'd remove this item
				S.divider(),
				S.listItem()
					.title(`All`)
					.schemaType(schemaType)
					.child(
						S.documentList()
							.id(`all-${schemaType}`)
							.title(`All`)
							.schemaType(schemaType)
							.filter(`_type == "${schemaType}"`)
							// Load this pane for existing `lesson` documents
							// or new documents that aren't using an initial value template
							.canHandleIntent(
								(intentName, params) => intentName === 'edit' || params.template === schemaType
							)
					),
			])
	)
}
