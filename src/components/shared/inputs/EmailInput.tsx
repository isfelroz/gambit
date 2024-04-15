export default function EmailInput({
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
			<input
				className="text-field"
				type="email"
				name={name}
				placeholder={placeholder}
				required={required}
			/>
		</label>
	)
}
