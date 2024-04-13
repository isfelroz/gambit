import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

export function useSection(type: string): ComponentType<any> | null {
	switch (type) {
		case 'section.hero':
			return dynamic(() => import('@/components/sections/HeroImage'))
		case 'section.twocolumns':
			return dynamic(() => import('@/components/sections/TwoColumns'))
		case 'section.features':
			return dynamic(() => import('@/components/sections/Features'))
		case 'section.logosgrid':
			return dynamic(() => import('@/components/sections/LogosGrid'))
		case 'section.projects':
			return dynamic(() => import('@/components/sections/Projects'))

		default:
			return null
	}
}
