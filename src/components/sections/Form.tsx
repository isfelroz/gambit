import { SectionFormTypes } from '@/types'

import { Suspense } from 'react'
import FormBuilder from '../shared/FormBuilder'

export default function Form({ title = '', form = null, ...args }: SectionFormTypes) {
	return (
		<section className={`py-12 dark bg-background text-default`}>
			<div className="container">
				<h2 className="mb-8">{title}</h2>
				{form && (
					<Suspense>
						<FormBuilder {...form} />
					</Suspense>
				)}
			</div>
		</section>
	)
}
