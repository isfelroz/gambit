import { SectionProjectsTypes } from '@/types'
import CardImage from '../shared/CardImage'
import SwiperCardImage from '../shared/SwiperCardImage'
import { Suspense } from 'react'
import { Button } from '../shared/Button'

export default function Projects({ title = '', items = [], link = null }: SectionProjectsTypes) {
	return (
		<section className={`py-12 dark bg-background`}>
			<div className="container">
				<h2 className="mb-8">{title}</h2>
				{items.length && (
					<Suspense>
						<SwiperCardImage items={items as any} />
					</Suspense>
				)}
				{/* {link && <Button {...(link as any)} />} */}
			</div>
		</section>
	)
}
