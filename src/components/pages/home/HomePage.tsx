import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { HomePagePayload } from '../../../../types'

export interface HomePageProps {
	data: HomePagePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
	// Default to an empty object to allow previews on non-existent documents
	const { title = '' } = data ?? {}

	return <h1>{title}</h1>
}

export default HomePage
