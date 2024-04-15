interface FormDataObject {
	[k: string]: string
}

export function getFormObjectData(formData: FormData) {
	const formDataObj: FormDataObject = {}
	formData.forEach((value, key) => {
		if (value === '') return
		formDataObj.hasOwnProperty(key)
			? (formDataObj[key] = formDataObj[key] + ',' + value)
			: (formDataObj[key] = value + '')
	})
	return formDataObj
}
