'use client'

import { StringInputProps, set, unset } from 'sanity'

import { Grid, Stack, Box, Card, Heading } from '@sanity/ui'
import { useCallback } from 'react'

import React from 'react'
import { IconFeature } from './icons/feature-1'
import { IconFeatureImage } from './icons/feature-image'

type FeatureLayout = {
	value: string
	title: string
	icon: any
}

const FEATURES_LAYOUTS: FeatureLayout[] = [
	{ value: 'grid', title: 'Grid', icon: IconFeatureImage },
	{ value: 'stack', title: 'Stack', icon: IconFeature },
]

function FeaturesLayoutInput(props: StringInputProps) {
	const { onChange, value = '' } = props

	const onSelectItem = useCallback(
		(layout: FeatureLayout) => {
			const nextValue = layout.value
			onChange(nextValue ? set(nextValue) : unset())
		},
		[onChange]
	)
	return (
		<Stack space={3}>
			<Box padding={1}>
				<Grid
					autoCols={'auto'}
					columns={[1, 1, 2, 2, 3]}
					autoFlow={'row dense'}
					gap={[3]}
					padding={4}
				>
					{FEATURES_LAYOUTS.map((layout, index) => {
						return (
							<FeaturePreview
								key={index}
								selected={value === layout.value}
								layout={layout}
								onClick={() => onSelectItem(layout)}
							/>
						)
					})}
				</Grid>
			</Box>
		</Stack>
	)
}

type PreviewProps = {
	onClick: React.MouseEventHandler<HTMLDivElement> | undefined
	layout: FeatureLayout
	selected: Boolean
}

function FeaturePreview(props: PreviewProps) {
	const { onClick, layout, selected } = props
	const Icon = layout.icon
	return (
		<Card
			role="button"
			shadow={1}
			tone={selected ? 'positive' : 'default'}
			padding={3}
			onClick={onClick}
			style={{ cursor: 'pointer' }}
		>
			<Stack padding={2} space={[3]}>
				<Heading as="h5" size={1}>
					{layout.title}
				</Heading>
				<div>
					<Icon />
				</div>
			</Stack>
		</Card>
	)
}

export default FeaturesLayoutInput
