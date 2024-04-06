// import '@/styles/index.css'

// import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

// import { Footer } from '@/components/global/Footer'

// import { urlForOpenGraphImage } from '@/sanity/lib/utils'
// import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'
import { Header } from '@/components/global/Header'

const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'))

// export async function generateMetadata(): Promise<Metadata> {
// 	const [{ data: settings }, { data: homePage }] = await Promise.all([
// 		loadSettings(),
// 		loadHomePage(),
// 	])

// 	const ogImage = urlForOpenGraphImage(settings?.ogImage)
// 	return {
// 		title: homePage?.title
// 			? {
// 					template: `%s | ${homePage.title}`,
// 					default: homePage.title || 'Personal website',
// 			  }
// 			: undefined,
// 		description: homePage?.overview ? toPlainText(homePage.overview) : undefined,
// 		openGraph: {
// 			images: ogImage ? [ogImage] : [],
// 		},
// 	}
// }

// export const viewport: Viewport = {
// 	themeColor: '#000',
// }

export default async function IndexRoute({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Suspense>
				<Header />
			</Suspense>
			<main className="mt-20 flex-grow px-4 md:px-16 lg:px-32">
				<Suspense>{children}</Suspense>
			</main>
			{/* <Suspense>
				<Footer />
			</Suspense> */}

			{draftMode().isEnabled && <LiveVisualEditing />}
		</>
	)
}
