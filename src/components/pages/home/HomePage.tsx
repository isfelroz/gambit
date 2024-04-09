import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import type { HomePagePayload } from '@/types'
import Section from '@/components/sections/Section'

export interface HomePageProps {
	data: HomePagePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
	// Default to an empty object to allow previews on non-existent documents
	const { title = '', sections = [] } = data ?? {}

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
