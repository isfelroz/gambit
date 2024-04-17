'use server'
import { toHTML } from '@portabletext/to-html'
import { loadForm } from '@/sanity/loader/loadQuery'
import { sendMail } from '@/utils/sendMail'

export async function submitForm(prevState: any, formData: FormData) {
	try {
		if (!prevState?.id) throw new Error('not form id provided')
		const {
			data: { mail, response },
		} = await loadForm(prevState.id)

		const mailOptions = {
			from: mail?.from || '',
			to: mail?.to || '',
			subject: mail?.subject || '',
			html: toHTML(mail?.body as any),
			attachments: [] as any[],
		}

		for (const [name, value] of formData.entries()) {
			if (value === '' || name[0] === '$') continue
			if (typeof value === 'string') {
				mailOptions.html = mailOptions.html.replaceAll(`[${name}]`, value)
				mailOptions.subject = mailOptions.subject.replaceAll(`[${name}]`, value)
				mailOptions.from = mailOptions.from.replaceAll(`[${name}]`, value)
				mailOptions.to = mailOptions.to.replaceAll(`[${name}]`, value)
			}

			const attacment = value as any

			if (attacment && attacment?.size > 0) {
				const buffer = Buffer.from(await attacment.arrayBuffer())
				const filename = attacment.name.replaceAll(' ', '_')
				mailOptions.attachments.push({
					filename,
					content: buffer,
				})
			}
		}

		const issend = await sendMail(mailOptions)

		if (!issend) throw new Error(response?.error)

		return {
			...prevState,
			message: response?.success,
			status: 200,
		}
	} catch (error: any) {
		console.log(error)
		return {
			...prevState,
			message: error.message,
			status: 400,
		}
	}
}
