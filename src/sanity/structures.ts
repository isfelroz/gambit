// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.

import { type Divider, type ListItemBuilder, type StructureResolver } from 'sanity/structure'
import { type WebStructure } from '../types'

export const webStructure = (): StructureResolver => {
	return (S) => {
		return S.list()
			.title('Content')
			.items([
				S.divider(),
				S.documentTypeListItem('project'),
				S.divider(),
				S.documentTypeListItem('page'),
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
				S.documentTypeListItem('form'),
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
