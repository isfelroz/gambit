// import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { PagePayload } from '@/types'
import Section from '@/components/sections/Section'

export interface PageProps {
	data: PagePayload | null
}

export function Page({ data }: PageProps) {
	// Default to an empty object to allow previews on non-existent documents
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

export default Page
