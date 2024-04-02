import { type DocumentDefinition } from 'sanity'
import {
	Divider,
	DocumentListBuilder,
	ListItemBuilder,
	type StructureResolver,
} from 'sanity/structure'

export const singletonPlugin = (types: string[]) => {
	return {
		name: 'singletonPlugin',
		document: {
			// Hide 'Singletons (such as Home)' from new document options
			// https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
			newDocumentOptions: (prev: any, { creationContext }) => {
				if (creationContext.type === 'global') {
					return prev.filter((templateItem) => !types.includes(templateItem.templateId))
				}

				return prev
			},
			// Removes the "duplicate" action on the Singletons (such as Home)
			actions: (prev, { schemaType }) => {
				if (types.includes(schemaType)) {
					return prev.filter(({ action }) => action !== 'duplicate')
				}

				return prev
			},
		},
	}
}

interface SrrayStructure {
	schemaType: string
	singleton?: boolean
	definition?: DocumentDefinition
}

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (arrayStructure: SrrayStructure[]): StructureResolver => {
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
