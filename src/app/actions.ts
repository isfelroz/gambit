'use server'

import { getFormObjectData } from '@/utils/getFormObjectData'

export async function submitForm(prevState: any, formData: FormData) {
	const rawFormData = getFormObjectData(formData)
	console.log(rawFormData)

	return {
		message: 'Please enter a valid email',
	}

	// mutate data
	// revalidate cache
}
