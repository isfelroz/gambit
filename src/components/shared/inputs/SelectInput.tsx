export default function SelectInput({
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
			<select className="text-field" name={name} required={required}>
				<option value="hello">hello</option>
			</select>
		</label>
	)
}
