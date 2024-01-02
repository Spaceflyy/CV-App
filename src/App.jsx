import { useState } from "react";
import InputSection from "./components/InputSection.jsx";
import InputForm from "./components/InputForm.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";

function App() {
	const [open, setOpen] = useState(0);
	const [eduList, setEduList] = useState([]);
	const [text, setText] = useState({});

	function handleChange(e) {
		e.preventDefault();
		let name = document.getElementById("Full Name").value;
		let email = document.getElementById("Email").value;
		let tel = document.getElementById("Telephone").value;
		let loc = document.getElementById("Location").value;
		let newDetails = { fName: name, mail: email, telephone: tel, location: loc };
		setText(newDetails);
	}
	function handleSubmit(e) {
		e.preventDefault();
		let schoolName = document.getElementById("School Name").value;
		let subject = document.getElementById("Subject").value;
		let start = document.getElementById("Start Date").value;
		let end = document.getElementById("End Date").value;
		let newEducation = {
			name: schoolName,
			subject: subject,
			start: start,
			end: end,
		};

		setEduList([...eduList, newEducation]);
	}

	return (
		<>
			<div className="infoContainer">
				<PersonalInfo value={text} onChange={handleChange} />

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
							onChange={handleSubmit}
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
				<h1>{text.fName}</h1>
				<p>{text.mail}</p>
				<p>{text.telephone}</p>
				<p>{text.location}</p>

				{eduList.map((list) => {
					return (
						<>
							<h1>{list.name}</h1>
							<p>{list.subject}</p>
							<p>{list.start}</p>
							<p>{list.end}</p>
						</>
					);
				})}
			</div>
		</>
	);
}
export default App;
