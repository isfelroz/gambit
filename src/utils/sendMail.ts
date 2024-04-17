import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: 'smtp.zoho.eu',
	secure: true,
	port: 465,
	auth: {
		user: 'info@falroz.com',
		pass: 'kWt4sfYGmaQs',
	},
})

export async function sendMail(mailOptions: any) {
	const sender = await transporter.sendMail(mailOptions, function (err, info) {
		console.log({ info, err })
	})
	return sender
}

export function createMailOptionsFromForm(formData: FormData) {
  
}
