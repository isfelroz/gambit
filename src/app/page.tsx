import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { loadHomePage } from '../../sanity/lib/load-query'
import { studioUrl } from '../../sanity/env'
import Link from 'next/link'
const HomePagePreview = dynamic(() => import('@/components/pages/home/HomePagePreview'))

export default async function Home() {
	const initial: any = await loadHomePage()

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
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>{initial.data.title}</h1>
		</main>
	)
}
