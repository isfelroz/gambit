'use client'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { useFormState } from 'react-dom'
import { submitForm } from '@/app/actions'

const initialState: any = {
	message: '',
}
export default function FormBuilder({ fields = [], id = '', submit = 'submit' }): any {
	const [state, formAction] = useFormState(submitForm, {
		...initialState,
		id,
	})

	return (
		<form action={formAction} className="grid grid-cols-2 gap-4">
			{fields.length > 0 &&
				fields.map(({ _type = '', size = 50, _key = '', ...args }: any) => {
					const Input = dynamicField(_type)
					if (!Input) return null
					return (
						<div key={_key} className={clsx('col-span-2', size == 50 ? 'lg:col-span-1' : '')}>
							<Input {...args} />
						</div>
					)
				})}
			<p className={`${state.status == 200 ? 'success' : 'error'}`}>{state?.message}</p>
			<div className="col-span-2">
				<button
					type="submit"
					className={clsx(
						'bg-btn-bg duration-300 group hover:bg-btn-bg-hover hover:text-btn-text-hover px-6 py-3 rounded-[30px] text-btn-text transition'
					)}
				>
					<span className="z-20 relative">{submit}</span>
				</button>
			</div>
		</form>
	)
}

function dynamicField(type: string): ComponentType<any> | null {
	switch (type) {
		case 'field.text':
			return dynamic(() => import('@/components/shared/inputs/TextInput'))
		case 'field.textarea':
			return dynamic(() => import('@/components/shared/inputs/TextAreaInput'))
		case 'field.email':
			return dynamic(() => import('@/components/shared/inputs/EmailInput'))
		case 'field.phone':
			return dynamic(() => import('@/components/shared/inputs/PhoneInput'))
		case 'field.select':
			return dynamic(() => import('@/components/shared/inputs/SelectInput'))
		case 'field.file':
			return dynamic(() => import('@/components/shared/inputs/FileInput'))
		case 'field.checkbox':
			return dynamic(() => import('@/components/shared/inputs/CheckboxInput'))
		default:
			return null
	}
}
