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
			name: "Oxford University",
			subject: "Physics",
			start: "13/09/20",
			end: "23/09/23",
			location: "Oxford, UK",
		},
	]);
	const [text, setText] = useState({
		id: 0,
		fName: "Alec Selwyn",
		mail: "alecselwyn@example.com",
		telephone: "+447906874351",
		location: "London, UK",
	});
	const [expList, setExpList] = useState([
		{
			id: 0,
			name: "Web Development Co.",
			pos: "UX & UI Designer",
			desc:
				"Prototyped and designed many different user interfaces for various clients across many different industries, ranging from culinary companies to banks. ",
			start: "10/11/23",
			end: "Present",
			location: "London, UK",
		},
		{
			id: 1,
			name: "Web Development Co.",
			pos: "UX & UI Designer",
			desc:
				"Prototyped and designed many different user interfaces for various clients across many different industries, ranging from culinary companies to banks. ",
			start: "10/11/23",
			end: "Present",
			location: "London, UK",
		},
	]);
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
			let loc = document.querySelector("#expForm #Location").value;

			let newExperience = {
				id: id,
				name: name,
				pos: position,
				desc: desc,
				start: start,
				end: end,
				location: loc,
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
	const saveEditExp = (e) => {
		e.preventDefault();
		let companyName = document.querySelector("#expForm #CompanyName").value;
		let position = document.querySelector("#expForm #Position").value;
		let description = document.querySelector("#expForm #Description").value;
		let startDate = document.querySelector("#expForm #StartDate").value;
		let endDate = document.querySelector("#expForm #EndDate").value;
		let loc = document.querySelector("#expForm #Location").value;
		let submitBtn = document.querySelector("#expForm #submitBtn");
		let editBtn = document.querySelector("#expForm #editBtn");

		submitBtn.classList.remove("hidden");
		submitBtn.classList.add("displayShown");
		editBtn.classList.remove("displayShown");
		editBtn.classList.add("hidden");
		let id = Number(submitBtn.getAttribute("data"));

		setExpList(
			expList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						name: companyName,
						pos: position,
						desc: description,
						start: startDate,
						end: endDate,
						location: loc,
					};
				} else return item;
			})
		);

		setFormOpen(false);
	};

	const saveEditEdu = (e) => {
		e.preventDefault();
		let schoolName = document.querySelector("#educationForm #SchoolName").value;
		let subject = document.querySelector("#educationForm #Subject").value;
		let start = document.querySelector("#educationForm #StartDate").value;
		let end = document.querySelector("#educationForm #EndDate").value;
		let loc = document.querySelector("#educationForm #Location").value;
		let submitBtn = document.getElementById("submitBtn");
		let editBtn = document.getElementById("editBtn");
		submitBtn.classList.remove("hidden");
		submitBtn.classList.add("displayShown");
		editBtn.classList.remove("displayShown");
		editBtn.classList.add("hidden");
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

	const handleEditEducation = (id) => {
		let item = eduList.filter((item) => item.id === id);
		let schoolName = document.querySelector("#educationForm #SchoolName");
		let subject = document.querySelector("#educationForm #Subject");
		let start = document.querySelector("#educationForm #StartDate");
		let end = document.querySelector("#educationForm #EndDate");
		let loc = document.querySelector("#educationForm #Location");
		let submitBtn = document.getElementById("submitBtn");
		let editBtn = document.getElementById("editBtn");
		editBtn.setAttribute("data", id);
		submitBtn.classList.add("hidden");
		submitBtn.classList.remove("displayShown");
		editBtn.classList.add("displayShown");
		editBtn.classList.remove("hidden");

		schoolName.value = item[0].name;
		subject.value = item[0].subject;
		start.value = item[0].start;
		end.value = item[0].end;
		loc.value = item[0].location;
		setFormOpen(true);
	};

	const handleEditExp = (id) => {
		let item = expList.filter((item) => item.id === id);

		let companyName = document.querySelector("#expForm #CompanyName");
		let position = document.querySelector("#expForm #Position");
		let description = document.querySelector("#expForm #Description");
		let startDate = document.querySelector("#expForm #StartDate");
		let endDate = document.querySelector("#expForm #EndDate");
		let loc = document.querySelector("#expForm #Location");

		let submitBtn = document.querySelector("#expForm #submitBtn");
		let editBtn = document.querySelector("#expForm #editBtn");
		editBtn.setAttribute("data", id);
		submitBtn.classList.add("hidden");
		submitBtn.classList.remove("displayShown");
		editBtn.classList.add("displayShown");
		editBtn.classList.remove("hidden");

		companyName.value = item[0].name;
		position.value = item[0].pos;
		description.value = item[0].desc;
		startDate.value = item[0].start;
		endDate.value = item[0].end;
		loc.value = item[0].location;
		setFormOpen(true);
	};
	const handleCancel = (e) => {
		console.log(e.target);
		let submitBtn = document.getElementById("submitBtn");
		let editBtn = document.getElementById("editBtn");
		submitBtn.classList.remove("hidden");
		submitBtn.classList.add("displayShown");
		editBtn.classList.remove("displayShown");
		editBtn.classList.add("hidden");
		setFormOpen(false);
	};

	const handleLoadExample = () => {
		setExpList([
			{
				id: 0,
				name: "Web Development Co.",
				pos: "UX & UI Designer",
				desc:
					"Prototyped and designed many different user interfaces for various clients across many different industries, ranging from culinary companies to banks. ",
				start: "10/11/23",
				end: "Present",
				location: "London, UK",
			},
			{
				id: 1,
				name: "Web Development Co.",
				pos: "UX & UI Designer",
				desc:
					"Prototyped and designed many different user interfaces for various clients across many different industries, ranging from culinary companies to banks. ",
				start: "10/11/23",
				end: "Present",
				location: "London, UK",
			},
		]);
		setText({
			id: 0,
			fName: "Alec Selwyn",
			mail: "alecselwyn@example.com",
			telephone: "+447906874351",
			location: "London, UK",
		});

		setEduList([
			{
				id: 0,
				name: "Oxford University",
				subject: "Physics",
				start: "13/09/20",
				end: "23/09/23",
				location: "Oxford, UK",
			},
		]);
	};

	const handleCVClear = () => {
		setText({});
		setEduList([]);
		setExpList([]);
	};

	return (
		<>
			<div className="infoContainer">
				<div className="inputSection">
					<div className="btnContainer">
						<button onClick={window.print}>
							<ion-icon name="print-outline"></ion-icon> Print CV
						</button>
						<button onClick={handleLoadExample}>
							<ion-icon name="download-outline"></ion-icon> Load Example
						</button>

						<button onClick={handleCVClear}>
							<ion-icon name="trash-outline"></ion-icon> Clear CV
						</button>
					</div>
				</div>
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
								onEdit={handleEditEducation}
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
								onChange={handleSubmit}
								onClick={handleCancel}
								saveEdit={saveEditEdu}
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
								onEdit={handleEditExp}
							/>
							<InputForm
								formId={"expForm"}
								fields={[
									{ id: 0, name: "Company Name", type: "text" },
									{ id: 1, name: "Position", type: "text" },
									{ id: 2, name: "Description", type: "textarea" },
									{ id: 3, name: "Start Date", type: "text" },
									{ id: 4, name: "End Date", type: "text" },
									{ id: 5, name: "Location", type: "text" },
								]}
								isActive={open === 2 && formOpen === true}
								onChange={handleSubmit}
								onClick={handleCancel}
								saveEdit={saveEditExp}
							/>
						</>
					}
				/>
			</div>
			<div className="cvContainer">
				<div className="personalInfo">
					<h1>{text.fName}</h1>
					<div className="contactInfo">
						<ion-icon name="mail"></ion-icon>
						<p>{text.mail}</p>
						<ion-icon name="call"></ion-icon>
						<p>{text.telephone}</p>
						<ion-icon name="location"></ion-icon>
						<p>{text.location}</p>
					</div>
				</div>
				<div className="generalInfo">
					<h3 className={eduList.length > 0 ? "sectionTitle" : "hidden"}>
						Education
					</h3>
					{eduList.map((list) => {
						return (
							<div className="listElement" key={list.id}>
								<div className="dateLoc">
									<p>
										{list.start} - {list.end}
									</p>
									<p>{list.location}</p>
								</div>
								<div className="nameSub">
									<p className="elementName">{list.name}</p>
									<p>{list.subject}</p>
								</div>
							</div>
						);
					})}
					<h3 className={expList.length > 0 ? "sectionTitle" : "hidden"}>
						Work Experience
					</h3>
					{expList.map((list) => {
						return (
							<div className="listElement" key={list.id}>
								<div className="dateLoc">
									<p>
										{list.start} - {list.end}
									</p>
									<p> {list.location}</p>
								</div>
								<div className="nameSub">
									<p className="elementName">{list.name}</p>
									<p>{list.pos}</p>
									<p>{list.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
export default App;
