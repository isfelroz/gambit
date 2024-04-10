import { SectionFeaturesTypes, SharedFeature } from '@/types'
import ImageBox from '@/components/shared/ImageBox'
import ArrowIcon from '@/components/icons/ArrowIcon'

export default function Features({ title = '', items = [], columns = 2 }: SectionFeaturesTypes) {
    return (
        <section className={`py-12 ${columns == 6 ? 'dark bg-[#084851]' : 'light bg-background'}`}>
            <div className="container">
                {columns == 2 && <FeaturesHorizontal items={items} />}
                {columns == 3 && <FeaturesVertical items={items} />}
                {columns == 6 && <FeaturesVerticalSmall items={items} />}
            </div>
        </section>
    )
}

function FeaturesVertical({ items = [] }: { items: SharedFeature[] }) {
    return (
        <div className={'flex flex-wrap gap-x-10 gap-y-12 justify-center'}>
            {items &&
                items.length &&
                items.map(({ title, text, image }, key) => (
                    <div key={key} className="min-w-[350px] max-w-[500px] flex-1">
                        <article className={' group/link'}>
                            <div className="grid gap-4">
                                <div className="">{image && <ImageBox className="aspect-video" image={image} />}</div>
                                <div className="flex justify-between items-center">
                                    <h3>{title}</h3>
                                </div>
                                <p>{text}</p>
                            </div>
                        </article>
                    </div>
                ))}
        </div>
    )
}

function FeaturesHorizontal({ items = [] }: { items: SharedFeature[] }) {
    return (
        <div className={'flex flex-wrap gap-x-10 gap-y-12 justify-center max-w-[1024px] mx-auto'}>
            {items &&
                items.length &&
                items.map(({ title, text, image }, key) => (
                    <div key={key} className="min-w-[350px] max-w-[500px] flex-1">
                        <article className={' group/link'}>
                            <div className="flex gap-9">
                                <div className="w-[150px] flex-grow-0">{image && <ImageBox image={image} />}</div>
                                <div className="flex-1 flex flex-col gap-2 ">
                                    <div className="flex justify-between items-center">
                                        <h4>{title}</h4>
                                        <div className="bg-btn-bg text-btn-text rounded-full aspect-square p-4  group-hover/link:bg-btn-bg-hover group-hover/link:text-btn-text-hover transition  duration-300">
                                            <ArrowIcon className="w-[18px] h-[18px] group-hover/link:rotate-45 transition ease-[cubic-bezier(.175,.885,.32,1.8)] duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-base">{text}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
        </div>
    )
}

function FeaturesVerticalSmall({ items = [] }: { items: SharedFeature[] }) {
    return (
        <div className={'flex flex-wrap gap-x-4 gap-y-8 justify-center'}>
            {items &&
                items.length &&
                items.map(({ title, text, image }, key) => (
                    <div key={key} className="w-full min-w-[130px] max-w-[150px] flex-1">
                        <article className={' group/link'}>
                            <div className="grid gap-4 items-center text-center">
                                <div className="">{image && <ImageBox className="w-[64px] aspect-square m-auto" image={image} />}</div>
                                <h4 className="text-base">{title}</h4>
                                {text && <p>{text}</p>}
                            </div>
                        </article>
                    </div>
                ))}
        </div>
    )
}
