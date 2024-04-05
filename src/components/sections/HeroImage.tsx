import { SectionHero } from '@/types'
import { PortableText } from '@portabletext/react'
export default function HeroImage({ text }: SectionHero) {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<PortableText value={text?.content || []} />
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
						alt="mockup"
					/>
				</div>
			</div>
		</section>
	)
}
