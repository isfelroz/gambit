import { SharedProjectItem } from '@/types'
import ImageBox from './ImageBox'
import Link from 'next/link'
import ArrowIcon from '../icons/ArrowIcon'
import { resolveHref } from '@/sanity/lib/utils'

export default function CardImage({ image, title, description, link = null }: SharedProjectItem) {
	const href = resolveHref(link?._type, link?.slug) || '/'
	return (
		<Link href={href}>
			<article className="group aspect-[4/5] relative w-full rounded-3xl overflow-hidden isolate">
				{image && <ImageBox className="absolute top-0 left-0 w-full h-full" image={image} />}
				<div className="absolute flex flex-col justify-center w-full h-full bg-highlight opacity-0 transition-all duration-500 ease top-0 left-0 group-hover:opacity-75 z-10"></div>
				<div className="absolute h-full flex opacity-0 group-hover:opacity-100  justify-center items-center z-20 transition-all duration-500 ease">
					<span className="text-primary text-h1 group-hover:animate-[scrolling-text_100s_linear_infinite] whitespace-nowrap">
						{description}
					</span>
				</div>
				<div className="relative z-30 flex flex-col align-center justify-end h-full p-3">
					<div className="bg-background light rounded-[10px] p-3 flex justify-between gap-4 items-center">
						<div className="content_content flex-1">
							<h4>{title}</h4>
							<div className="tags">{`Stratégie • Campagnes d'acquisition`}</div>
						</div>
						<div>
							<div className="bg-btn-bg text-btn-text rounded-full aspect-square p-4  group-hover/link:bg-btn-bg-hover group-hover/link:text-btn-text-hover transition  duration-300">
								<ArrowIcon className="w-[18px] h-[18px] group-hover/link:rotate-45 transition ease-[cubic-bezier(.175,.885,.32,1.8)] duration-300" />
							</div>
						</div>
					</div>
				</div>
			</article>
		</Link>
	)
}
