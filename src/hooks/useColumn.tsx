import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

export function useColumn(type: string | null): ComponentType<any> | null {
	switch (type) {
		case 'twocolumns_image':
			return dynamic(() => import('@/components/shared/ImageBox'))

		case 'twocolumns_text':
			return dynamic(() => import('@/components/shared/Text'))

		default:
			return null
	}
}
