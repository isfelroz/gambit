import createImageUrlBuilder from '@sanity/image-url'
import type { Image, SlugValidationContext } from 'sanity'

import { apiVersion, dataset, projectId } from '@/sanity/lib/api'

const imageBuilder = createImageUrlBuilder({
	projectId: projectId || '',
	dataset: dataset || '',
})

export const urlForImage = (source: Image | undefined) => {
	// Ensure that source image contains a valid reference
	if (!source?.asset?._ref) {
		return undefined
	}
	return imageBuilder?.image(source).auto('format').fit('max')
}

export function urlForOpenGraphImage(image: Image | undefined) {
	return urlForImage(image)?.width(1200).height(627).fit('crop').url()
}

export function resolveHref(documentType?: string, slug?: string): string | undefined {
	switch (documentType) {
		case 'home':
			return '/'
		case 'page':
			return slug ? `/${slug}` : undefined
		case 'project':
			return slug ? `/project/${slug}` : undefined
		default:
			console.warn('Invalid document type:', documentType)
			return undefined
	}
}

export async function isUniqueAcrossSameLangue(slug: string, context: SlugValidationContext) {
	const { document, getClient } = context
	const client = getClient({ apiVersion: apiVersion })
	const id = document!._id.replace(/^drafts\./, '')
	const params = {
		draft: `drafts.${id}`,
		published: id,
		slug,
		language: document!.language,
		type: document!._type,
	}
	const query = `!defined(*[_type == $type && !(_id in [$draft, $published]) && slug.current == $slug && language == $language][0]._id)`
	const result = await client.fetch(query, params)
	return result
}
