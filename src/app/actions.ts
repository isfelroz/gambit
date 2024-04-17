'use server'

import { loadForm } from '@/sanity/loader/loadQuery'
import { sendMail } from '@/utils/sendMail'

export async function submitForm(prevState: any, formData: FormData) {
	try {
		if (!prevState?.id) throw new Error('not form id provided')
		const {
			data: { mail, response },
		} = await loadForm(prevState.id)
		console.log({ response, mail })
	} catch (error: any) {
		console.log(error.message)
		return {
			...prevState,
			message: 'Please enter a valid email',
		}
	}

	// let mailTemplate = ``

	// const attachments: any[] = []

	// for (const [name, value] of formData.entries()) {
	// 	if (value === '' || name[0] === '$') continue
	// 	if (typeof value === 'string') {
	// 		mailTemplate = mailTemplate.replaceAll(`[${name}]`, value)
	// 	}

	// 	const attacment = value as any

	// 	if (attacment && attacment?.size > 0) {
	// 		const buffer = Buffer.from(await attacment.arrayBuffer())
	// 		const filename = attacment.name.replaceAll(' ', '_')
	// 		attachments.push({
	// 			filename,
	// 			content: buffer,
	// 		})
	// 	}
	// }

	// const mailOptions = {
	// 	from: 'info@falroz.com', // sender address
	// 	to: 'felipe.alarcon.rozo@gmail.com',
	// 	subject: 'Some subject', // Subject line
	// 	html: mailTemplate,
	// 	attachments, // plain text body
	// }
	// const sender = await sendMail(mailOptions)

	// mutate data
	// revalidate cache
}
