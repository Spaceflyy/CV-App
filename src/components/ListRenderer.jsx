export default function ListRenderer({ onClick, isActive, dataArray }) {
	return (
		<ul className={isActive ? "shown" : "hidden"}>
			{dataArray.map((item) => {
				return <li>{item.name}</li>;
			})}

			<input onClick={onClick} type="button" value="Add" />
		</ul>
	);
}
