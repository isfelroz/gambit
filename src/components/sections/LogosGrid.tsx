import { SectionLogosGridTypes } from '@/types'
import clsx from 'clsx'
import ImageBox from '../shared/ImageBox'

const OFFSET_CLASSES: any = {
    0: '[&:nth-last-child(-n+3)]:border-b-0',
    1: '',
    2: '',
    3: '[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(2)]:border-b md:[&:nth-last-child(3)]:border-b lg:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(3)]:border-b-0',
    4: '[&:nth-last-child(-n+1)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0',
    5: '',
}

export default async function Logos({ title, items = [] }: SectionLogosGridTypes) {
    const offset = items.length % 6
    const classes = clsx(
        'aspect-square flex items-center justify-center p-8 md:p-10 lg:p-12 border-black border-r border-b [&:nth-child(3n)]:border-r-0 md:[&:nth-child(4n)]:border-r-0 md:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r lg:[&:nth-child(6n)]:border-r-0',
        OFFSET_CLASSES[offset]
    )

    return (
        <section className={`py-12 light bg-background`}>
            <div className="container grid gap-8 place-items-center">
                {title && <h2 className="w-fit">{title}</h2>}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {items.length &&
                        items.map(({ image, link }, key) => {
                            if (!image) return null
                            return (
                                <div key={key} className={classes}>
                                    <ImageBox image={image} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
