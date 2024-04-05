import { Url } from 'next/dist/shared/lib/router/router'
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
	link?: string
	label?: string
	reference?: PageReference
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
	text?: SharedText
}

// Components

export interface SharedText {
	_type?: string
	content: PortableTextBlock[]
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
