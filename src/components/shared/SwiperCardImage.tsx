'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import CardImage from '@/components/shared/CardImage'

export default function SwiperCardImage({ items = [] }) {
	if (items.length < 1) return null
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{items.length &&
				items.map((item: object, key) => {
					return (
						<SwiperSlide className={`max-w-[33%]`} key={key}>
							<CardImage {...item} />
						</SwiperSlide>
					)
				})}
		</Swiper>
	)
}
