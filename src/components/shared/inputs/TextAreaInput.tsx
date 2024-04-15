export default function TextAreaInput({
	name = '',
	placeholder = '',
	required = false,
	label = '',
	size = 50,
}) {
	if (!name) return null

	return (
		<label className="flex flex-col gap-4">
			{label && <span>{label}</span>}
			<textarea className="text-field" name={name} placeholder={placeholder} required={required} />
		</label>
	)
}
