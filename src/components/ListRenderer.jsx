export default function ListRenderer({
	onClick,
	isActive,
	dataArray,
	onDelete,
}) {
	return (
		<ul className={isActive ? "shown" : "hidden"}>
			{dataArray.map((item) => {
				return (
					<li id={item.id} key={item.id}>
						<p>{item.name}</p>
						<ion-icon name="create-outline"></ion-icon>
						<ion-icon
							onClick={() => onDelete(item.id)}
							name="trash-outline"
						></ion-icon>
					</li>
				);
			})}
			<button onClick={onClick}>
				<ion-icon name="add-circle-outline"></ion-icon>Add
			</button>
		</ul>
	);
}
