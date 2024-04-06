import { SharedText } from '@/types'
import { PortableText } from '@portabletext/react'
import { Button } from '@/components/shared/Button'

export default function Text({ content = [], links = null }: SharedText) {
	return (
		<div className="grid gap-8">
			<div className="global_content">
				<PortableText value={content} />
			</div>
			{links && links.length && (
				<div className="flex gap-4">
					{links.map((link, key) => (
						<Button key={key} {...link} />
					))}
				</div>
			)}
		</div>
	)
}
