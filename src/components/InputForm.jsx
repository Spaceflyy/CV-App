import "../styles/inputForm.css";

export default function InputForm({
	onClick,
	formId,
	fields,
	isActive,
	onChange,
	saveEdit,
}) {
	return (
		<form
			onSubmit={onChange}
			id={formId}
			className={isActive ? "shown" : "hidden"}
		>
			{fields.map((field) => {
				return (
					<label key={field.id} htmlFor={field.name}>
						<h3>{field.name}</h3>
						{field.type === "textarea" ? (
							<textarea id={field.name} type={field.type} />
						) : (
							<input
								name={field.name}
								id={field.name.split(" ").join("")}
								type={field.type}
							/>
						)}
					</label>
				);
			})}
			<input onClick={onClick} type="reset" value="Cancel" />
			<input type="reset" value="Clear" />
			<input form={formId} id="submitBtn" type="submit" value="Save" />
			<input
				className="hidden"
				onClick={saveEdit}
				id="editBtn"
				type="button"
				value="Save Edit"
			/>
		</form>
	);
}
