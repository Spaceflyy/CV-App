import { useState } from "react";
import InputSection from "./components/InputSection.jsx";
import InputForm from "./components/InputForm.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import ListRenderer from "./components/ListRenderer.jsx";

function App() {
	const [open, setOpen] = useState(0);
	const [eduList, setEduList] = useState([
		{
			id: 0,
			name: "Test",
			subject: "Maths",
			start: "13/10/20",
			end: "23/09/23",
			location: "Bournemouth",
		},
		{
			id: 1,
			name: "sdfsdf",
			subject: "asdfasdf",
			start: "13/10/20",
			end: "23/09/23",
			location: "sdfas",
		},
	]);
	const [text, setText] = useState({});
	const [expList, setExpList] = useState([]);
	const [formOpen, setFormOpen] = useState(false);

	const handleChange = (e) => {
		e.preventDefault();

		let name = document.getElementById("Full Name").value;
		let email = document.getElementById("Email").value;
		let tel = document.getElementById("Telephone").value;
		let loc = document.getElementById("Location").value;
		let newDetails = { fName: name, mail: email, telephone: tel, location: loc };
		setText(newDetails);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.getAttribute("id") === "educationForm") {
			let schoolName = document.querySelector("#educationForm #SchoolName").value;
			let subject = document.querySelector("#educationForm #Subject").value;
			let start = document.querySelector("#educationForm #StartDate").value;
			let end = document.querySelector("#educationForm #EndDate").value;
			let loc = document.querySelector("#educationForm #Location").value;
			let id = eduList.length;
			let newEducation = {
				id: id,
				name: schoolName,
				subject: subject,
				start: start,
				end: end,
				location: loc,
			};
			setEduList([...eduList, newEducation]);
		} else {
			let id = expList.length;
			let name = document.querySelector("#expForm #CompanyName").value;
			let position = document.querySelector("#expForm #Position").value;
			let desc = document.querySelector("#expForm #Description").value;
			let start = document.querySelector("#expForm #StartDate").value;
			let end = document.querySelector("#expForm #EndDate").value;

			let newExperience = {
				id: id,
				name: name,
				pos: position,
				desc: desc,
				start: start,
				end: end,
			};

			setExpList([...expList, newExperience]);
		}
		document.getElementById(e.target.getAttribute("id")).reset();
		setFormOpen(false);
	};

	const handleDeleteEducation = (id) => {
		setEduList(eduList.filter((item) => item.id !== id));
	};

	const handleDeleteExperience = (id) => {
		setExpList(expList.filter((item) => item.id !== id));
	};

	const saveEdit = (e) => {
		e.preventDefault();
		let schoolName = document.querySelector("#educationForm #SchoolName").value;
		let subject = document.querySelector("#educationForm #Subject").value;
		let start = document.querySelector("#educationForm #StartDate").value;
		let end = document.querySelector("#educationForm #EndDate").value;
		let loc = document.querySelector("#educationForm #Location").value;
		let submitBtn = document.getElementById("submitBtn");

		let id = Number(submitBtn.getAttribute("data"));
		console.log(id);
		setEduList(
			eduList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						name: schoolName,
						subject: subject,
						start: start,
						end: end,
						location: loc,
					};
				} else return item;
			})
		);

		setFormOpen(false);
	};

	const handleEdit = (id) => {
		let item = eduList.filter((item) => item.id === id);
		let schoolName = document.querySelector("#educationForm #SchoolName");
		let subject = document.querySelector("#educationForm #Subject");
		let start = document.querySelector("#educationForm #StartDate");
		let end = document.querySelector("#educationForm #EndDate");
		let loc = document.querySelector("#educationForm #Location");
		let submitBtn = document.getElementById("submitBtn");
		submitBtn.setAttribute("data", id);
		schoolName.value = item[0].name;
		subject.value = item[0].subject;
		start.value = item[0].start;
		end.value = item[0].end;
		loc.value = item[0].location;
		setFormOpen(true);
	};

	return (
		<>
			<div className="infoContainer">
				<PersonalInfo value={text} onChange={handleChange} />

				<InputSection
					title={"Education"}
					isActive={open === 1}
					onOpen={() => setOpen(1)}
					children={
						<>
							<ListRenderer
								onClick={() => setFormOpen(true)}
								isActive={open === 1 && formOpen === false}
								dataArray={eduList}
								onDelete={handleDeleteEducation}
								onEdit={handleEdit}
							/>
							<InputForm
								formId={"educationForm"}
								fields={[
									{ id: 0, name: "School Name", type: "text" },
									{ id: 1, name: "Subject", type: "text" },
									{ id: 2, name: "Start Date", type: "text" },
									{ id: 3, name: "End Date", type: "text" },
									{ id: 4, name: "Location", type: "text" },
								]}
								isActive={open === 1 && formOpen === true}
								onChange={saveEdit}
								onClick={() => setFormOpen(false)}
							/>
						</>
					}
				/>

				<InputSection
					title={"Experience"}
					isActive={open === 2}
					onOpen={() => setOpen(2)}
					children={
						<>
							<ListRenderer
								onClick={() => setFormOpen(true)}
								isActive={open === 2 && formOpen === false}
								dataArray={expList}
								onDelete={handleDeleteExperience}
							/>
							<InputForm
								formId={"expForm"}
								fields={[
									{ id: 0, name: "Company Name", type: "text" },
									{ id: 1, name: "Position", type: "text" },
									{ id: 2, name: "Description", type: "textarea" },
									{ id: 3, name: "Start Date", type: "text" },
									{ id: 4, name: "End Date", type: "text" },
								]}
								isActive={open === 2 && formOpen === true}
								onChange={handleSubmit}
								onClick={() => setFormOpen(false)}
							/>
						</>
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
						<div key={list.id}>
							<h1>{list.name}</h1>
							<p>{list.subject}</p>
							<p>{list.start}</p>
							<p>{list.end}</p>
							<p>{list.location}</p>
						</div>
					);
				})}

				{expList.map((list) => {
					return (
						<div key={list.id}>
							<h1>{list.name}</h1>
							<p>{list.pos}</p>
							<p>{list.desc}</p>
							<p>{list.start}</p>
							<p>{list.end}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}
export default App;
