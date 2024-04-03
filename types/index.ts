import { type DocumentDefinition } from 'sanity'

export interface WebStructure {
    schemaType: string
    singleton?: boolean
    definition?: DocumentDefinition
}
