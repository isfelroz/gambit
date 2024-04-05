import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import Section from '@/components/sections/Section'

export interface HomePageProps {
	data: HomePagePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
	// Default to an empty object to allow previews on non-existent documents
	const { title = '', sections = [] } = data ?? {}
	console.log(sections)

	return (
		<>
			{/* Sections */}
			{sections &&
				sections.length > 0 &&
				sections.map((section, key) => <Section key={key} {...section} />)}
		</>
	)
}

export default HomePage
