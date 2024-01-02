export default function InputForm({ fields, isActive, onChange }) {
	return (
		<form
			onSubmit={onChange}
			id="inputForm"
			className={isActive ? "shown" : "hidden"}
		>
			{fields.map((field) => {
				return (
					<label key={field.id} htmlFor={field.name}>
						<h3>{field.name}</h3>
						{field.type === "textarea" ? (
							<textarea id={field.name} type={field.type} />
						) : (
							<input name={field.name} id={field.name} type={field.type} />
						)}
					</label>
				);
			})}
			<input type="button" value="Cancel" />
			<input type="button" value="Clear" />
			<input form="inputForm" id="submitBtn" type="submit" value="Save" />
		</form>
	);
}
