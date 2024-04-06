import clsx from 'clsx'
import { TwoColumnsTypes } from '@/types'
import Column from '../shared/Column'

const COLUMNS_WIDTH: any = {
	30: 'lg:grid-cols-[30%_1fr]',
	40: 'lg:grid-cols-[40%_1fr]',
	50: '',
	60: 'lg:grid-cols-[60%_1fr]',
	70: 'lg:grid-cols-[70%_1fr]',
}

export default function TwoColumns({ watermark = null, size, items = [] }: TwoColumnsTypes) {
	const classes = clsx(
		'grid grid-cols-1 gap-[30px] md:gap-[63px] lg:gap-[126px]',
		items.length > 1 ? 'md:grid-cols-2' : '',
		items.length > 1 ? COLUMNS_WIDTH[size] : ''
	)
	return (
		<section className={`bg-background light pb-12 pt-[var(--xl-space)]`}>
			<div className="container">
				{watermark && (
					<div className="text-watermark leading-[1] opacity-5 relative z-0">{watermark}</div>
				)}
				<div className={classes}>
					{items && items.length && items.map((item, key) => <Column key={key} {...item} />)}
				</div>
			</div>
		</section>
	)
}
