import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

export function useSection(type: string): ComponentType | null {
	switch (type) {
		case 'section.hero':
			return dynamic(() => import('@/components/sections/HeroImage'))

		default:
			return null
	}
}
