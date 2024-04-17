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

export interface SectionFeaturesTypes {
	_type?: string
	_key?: string
	title?: string | null
	columns: number
	items?: SharedFeature[]
}

export interface SectionLogosGridTypes {
	_type?: string
	_key?: string
	title?: string | null
	items?: SharedLogoItem[]
}
export interface SectionProjectsTypes {
	_type?: string
	_key?: string
	title?: string
	link?: SharedLink | null
	items?: SharedProjectItem[]
}
export interface SectionFormTypes {
	_type?: string
	_key?: string
	title?: string
	form?: any
}

// Components

export interface SharedProjectItem {
	image?: Image | null
	link?: PageReference | null
	description?: string
	title?: string
}
export interface SharedLogoItem {
	image?: Image | null
	link?: SharedLink | null
}

export interface SharedFeature {
	text?: string
	title?: string
	image?: Image | null
	link?: SharedLink | null
}

export interface SharedLink {
	external?: boolean
	link?: string | null
	label?: string
	reference?: PageReference | null
}

export interface SharedText {
	_type?: string | undefined
	content: PortableTextBlock[] | undefined
	links?: MenuItem[] | null
}

export interface SharedSeo {
	title?: string
	text?: string
	image?: Image | null
}

// Page payloads

export interface HomePagePayload {
	sections?: any[]
	title?: string
	seo: SharedSeo
}

export interface PagePayload {
	sections?: any[]
	title?: string
	slug?: string
	seo: SharedSeo
}

export interface ProjectPayload extends PagePayload {}

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

export interface FormPayload {
	mail: FormMail | null
	response: FormResponse | null
}

interface FormMail {
	from?: string
	to?: string
	reply?: string
	subject?: string
	body?: PortableTextBlock[]
}
interface FormResponse {
	success?: string
	warning?: string
	error?: string
}
