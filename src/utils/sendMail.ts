import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: 'smtp.zoho.eu',
	secure: true,
	port: 465,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
})

export async function sendMail(mailOptions: any) {
	try {
		const sender = await transporter.sendMail(mailOptions)
		return sender
	} catch (er) {
		return null
	}
}

export function createMailOptionsFromForm(formData: FormData) {}
