export default function InputSection({ title, isActive, onOpen, children }) {
	return (
		<div className="inputSection">
			<h2 onClick={onOpen}>
				{title}
				<span className={isActive ? "chevron after" : "chevron"}></span>{" "}
			</h2>
			{children}
		</div>
	);
}
