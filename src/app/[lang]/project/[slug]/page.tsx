import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
// import { toPlainext } from 'next-sanity'

import { Page } from '@/components/pages/page/Page'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadProject } from '@/sanity/loader/loadQuery'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
const PagePreview = dynamic(() => import('@/components/pages/page/PagePreview'))

type Props = {
	params: { slug: string }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { data: page } = await loadProject(params.slug)
	if (!page) return {}
	if (!page?.seo) return {}

	const {
		seo: { title = null, text = null, image = null },
	} = page

	const ogImage = image ? urlForOpenGraphImage(image) : null

	return {
		title: title
			? {
					template: `%s | ${title}`,
					default: title || 'Walt website',
			  }
			: undefined,
		description: text ? text : undefined,
		openGraph: {
			images: ogImage ? [ogImage] : [],
		},
	}
}

export function generateStaticParams() {
	return generateStaticSlugs('project')
}

export default async function PageSlugRoute({ params }: Props) {
	const initial = await loadProject(params.slug)

	if (draftMode().isEnabled) {
		return <PagePreview params={params} initial={initial} />
	}

	if (!initial.data) {
		notFound()
	}

	return <Page data={initial.data} />
}
