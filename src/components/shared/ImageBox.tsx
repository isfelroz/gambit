import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'
import clsx from 'clsx'

interface ImageBoxProps {
	image?: { asset?: any }
	alt?: string
	width?: number
	height?: number
	size?: string
	className?: string
	'data-sanity'?: string
	priority?: boolean
	loading?: 'eager' | 'lazy'
}

export default function ImageBox({
	image,
	alt = 'Cover image',
	width = 3500,
	height = 2000,
	size = '100vw',
	className = '',
	...props
}: ImageBoxProps) {
	const imageUrl = image && urlForImage(image)?.width(width).url()

	return (
		<>
			{imageUrl && (
				<Image
					className={clsx(className)}
					width={width}
					height={height}
					alt={alt}
					sizes={size}
					src={imageUrl}
					{...props}
				/>
			)}
		</>
	)
}
