import { useState } from "react";
import InputSection from "./components/InputSection.jsx";
import InputForm from "./components/InputForm.jsx";

function App() {
	const [open, setOpen] = useState(0);
	const [eduList, setEduList] = useState([]);

	function handleChange(e, form) {
		e.preventDefault();
	}

	return (
		<>
			<div className="infoContainer">
				<InputSection
					title={"Personal Details"}
					isActive={open === 0}
					onOpen={() => setOpen(0)}
					children={
						<InputForm
							fields={[
								{ id: 0, name: "Full Name", type: "text" },
								{ id: 1, name: "Email", type: "email" },
								{ id: 2, name: "Telephone", type: "tel" },
								{ id: 3, name: "Location", type: "text" },
							]}
							isActive={open === 0}
							onChange={handleChange}
						/>
					}
				/>

				<InputSection
					title={"Education"}
					isActive={open === 1}
					onOpen={() => setOpen(1)}
					children={
						<InputForm
							fields={[
								{ id: 0, name: "School Name", type: "text" },
								{ id: 1, name: "Subject", type: "text" },
								{ id: 2, name: "Start Date", type: "date" },
								{ id: 3, name: "End Date", type: "date" },
							]}
							isActive={open === 1}
							onChange={handleChange}
						/>
					}
				/>

				<InputSection
					title={"Experience"}
					isActive={open === 2}
					onOpen={() => setOpen(2)}
					children={
						<InputForm
							fields={[
								{ id: 0, name: "Company Name", type: "text" },
								{ id: 1, name: "Position", type: "text" },
								{ id: 2, name: "Description", type: "textarea" },
								{ id: 3, name: "Start Date", type: "date" },
								{ id: 4, name: "End Date", type: "date" },
							]}
							isActive={open === 2}
						/>
					}
				/>
			</div>
			<div className="cvContainer">
				<p>{eduList.name}</p>
				<p>{eduList.subject}</p>
				<p>{eduList.start}</p>
				<p>{eduList.end}</p>
			</div>
		</>
	);
}
export default App;
