import InputSection from "./components/InputSection.jsx";
function App() {
	return (
		<>
			<div className="infoContainer">
				<InputSection
					title={"Personal Details"}
					fields={[
						{ id: 0, name: "Full Name", type: "text" },
						{ id: 1, name: "Email", type: "email" },
						{ id: 2, name: "Telephone", type: "tel" },
						{ id: 3, name: "Location", type: "text" },
					]}
					collapseable={false}
				/>
				<hr />
				<InputSection
					title={"Education"}
					fields={[
						{ id: 0, name: "School Name", type: "text" },
						{ id: 1, name: "Subject", type: "text" },
						{ id: 2, name: "Start Date", type: "date" },
						{ id: 3, name: "End Date", type: "date" },
					]}
					collapseable={true}
				/>
				<hr />
				<InputSection
					title={"Experience"}
					fields={[
						{ id: 0, name: "Company Name", type: "text" },
						{ id: 1, name: "Position", type: "text" },
						{ id: 2, name: "Description", type: "textarea" },
						{ id: 3, name: "Start Date", type: "date" },
						{ id: 4, name: "End Date", type: "date" },
					]}
					collapseable={true}
				/>
			</div>
			<div className="cvContainer"></div>
		</>
	);
}
export default App;
