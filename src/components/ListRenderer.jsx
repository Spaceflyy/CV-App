import "../styles/listRenderer.css";

export default function ListRenderer({
	onClick,
	isActive,
	dataArray,
	onDelete,
	onEdit,
}) {
	return (
		<ul className={isActive ? "shown" : "hidden"}>
			{dataArray.map((item) => {
				return (
					<li id={item.id} key={item.id}>
						<p>{item.name}</p>
						<ion-icon
							onClick={() => onEdit(item.id)}
							name="create-outline"
						></ion-icon>
						<ion-icon
							onClick={() => onDelete(item.id)}
							name="trash-outline"
						></ion-icon>
					</li>
				);
			})}
			<div className="btnContainer">
				<button onClick={onClick}>
					<ion-icon name="add-circle-outline"></ion-icon>Add
				</button>
			</div>
		</ul>
	);
}
