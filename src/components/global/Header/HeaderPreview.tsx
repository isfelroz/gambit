'use client'

import { useHeader } from '@/sanity/loader/useQuery'
import HeaderLayout from './HeaderLayout'

type Props = {
	initial: Parameters<typeof useHeader>[0]
}

export default function HeaderPreview(props: Props) {
	const { data } = useHeader(props.initial)

	return <HeaderLayout data={data!} />
}
