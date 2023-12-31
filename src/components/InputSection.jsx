export default function InputSection({ title, fields, isActive, onOpen }) {
	return (
		<div className="inputSection">
			<h2 onClick={onOpen}>
				{title}
				<span className={isActive ? "chevron after" : "chevron"}></span>
			</h2>
			<form className={isActive ? "shown" : "hidden"} action="">
				{fields.map((field) => {
					return (
						<label key={field.id} htmlFor={field.name}>
							<h3>{field.name}</h3>
							{field.type === "textarea" ? (
								<textarea id={field.name} type={field.type} />
							) : (
								<input id={field.name} type={field.type} />
							)}
						</label>
					);
				})}
			</form>
		</div>
	);
}
