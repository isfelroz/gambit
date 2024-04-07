import clsx from 'clsx'
import { SectionHero } from '@/types'
import Text from '@/components/shared/Text'
import ImageBox from '../shared/ImageBox'
export default function HeroImage({ text = null, image = null }: SectionHero) {
	return (
		<section className={clsx('bg-background flex flex-col', 'dark')}>
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_50%] gap-[30px] md:gap-[63px] lg:gap-[126px] py-[84px] items-center">
				<div>{text && <Text {...text} />}</div>
				<div className="h-fit w-full">
					{image && (
						<ImageBox
							className="relative w-full h-auto"
							size="50vw"
							width={800}
							height={800}
							image={image}
							priority={true}
							loading="eager"
						/>
					)}
				</div>
			</div>
		</section>
	)
}
