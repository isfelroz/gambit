import { type DocumentDefinition } from 'sanity'

export interface WebStructure {
	schemaType: string
	singleton?: boolean
	definition?: DocumentDefinition
}

export interface HomePagePayload {
	title?: string
}
