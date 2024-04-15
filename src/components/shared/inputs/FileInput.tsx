export default function FileInput({
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
			<input type="file" name={name} placeholder={placeholder} required={required} />
		</label>
	)
}
