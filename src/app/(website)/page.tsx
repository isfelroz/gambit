import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import { Metadata } from 'next'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
const HomePagePreview = dynamic(() => import('@/components/pages/home/HomePagePreview'))

export async function generateMetadata(): Promise<Metadata> {
    const { data } = await loadHomePage()
    if (!data) return {}

    const {
        seo: { title, text, image },
    } = data

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

// export const viewport: Viewport = {
// 	themeColor: '#000',
// }

export default async function IndexRoute() {
    const initial = await loadHomePage()

    if (draftMode().isEnabled) {
        return <HomePagePreview initial={initial} />
    }

    if (!initial.data) {
        return (
            <div className="text-center">
                You don&rsquo;t have a homepage yet,{' '}
                <Link href={`${studioUrl}/desk/home`} className="underline">
                    create one now
                </Link>
                !
            </div>
        )
    }

    return <HomePage data={initial.data} />
}
