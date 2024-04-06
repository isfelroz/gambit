import { type DocumentDefinition } from 'sanity'
import type { Image, PortableTextBlock } from 'sanity'

export interface WebStructure {
	schemaType: string
	singleton?: boolean
	definition?: DocumentDefinition
}

export interface PageReference {
	_type: string
	slug: string
}

export interface MenuItem {
	_type: string
	link?: string | null
	label?: string
	reference?: PageReference | null
}

export interface MilestoneItem {
	description?: string
	duration?: {
		start?: string
		end?: string
	}
	image?: Image
	tags?: string[]
	title?: string
}

export interface ShowcaseProject {
	_type: string
	coverImage?: Image
	overview?: PortableTextBlock[]
	slug?: string
	tags?: string[]
	title?: string
}

// Sections
export interface SectionHero {
	_type?: string
	_key?: string
	text?: SharedText | null
	image?: Image | null
}

export interface TwoColumnsTypes {
	_type?: string
	_key?: string
	watermark?: string | null
	size: number
	items?: SharedText[] | Image[]
}

// Components

export interface SharedText {
	_type?: string | undefined
	content: PortableTextBlock[] | undefined
	links?: MenuItem[] | null
}

// Page payloads

export interface HomePagePayload {
	sections?: any[]
	title?: string
}

export interface PagePayload {
	body?: PortableTextBlock[]
	name?: string
	overview?: PortableTextBlock[]
	title?: string
	slug?: string
}

export interface ProjectPayload {
	client?: string
	coverImage?: Image
	description?: PortableTextBlock[]
	duration?: {
		start?: string
		end?: string
	}
	overview?: PortableTextBlock[]
	site?: string
	slug: string
	tags?: string[]
	title?: string
}

export interface SettingsPayload {
	footer?: PortableTextBlock[]
	menuItems?: MenuItem[]
	ogImage?: Image
}
export interface HeaderPayload {
	title?: String
	menu?: MenuItem[]
	logo?: Image
}
