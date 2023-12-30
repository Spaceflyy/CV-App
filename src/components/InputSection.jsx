import { useState } from "react";

export default function InputSection({ title, fields, collapseable }) {
	const [open, setOpen] = useState(collapseable);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div className="inputSection">
			<h2 onClick={toggle}>
				{title}
				{collapseable ? (
					<span className={open ? "chevron" : "chevron after"}></span>
				) : (
					""
				)}
			</h2>
			<form className={open && "hidden"} action="">
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
