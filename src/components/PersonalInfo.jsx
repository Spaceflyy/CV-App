export default function PersonalInfo({ text, onChange }) {
	return (
		<div className="inputSection">
			<h2>Personal Details</h2>
			<form id="personalDetails" class="shown">
				<label for="Full Name">
					<h3>Full Name</h3>
					<input
						value={text}
						onChange={onChange}
						name="Full Name"
						id="Full Name"
						type="text"
					/>
				</label>
				<label for="Email">
					<h3>Email</h3>
					<input
						value={text}
						onChange={onChange}
						name="Email"
						id="Email"
						type="email"
					/>
				</label>
				<label for="Telephone">
					<h3>Telephone</h3>
					<input
						value={text}
						onChange={onChange}
						name="Telephone"
						id="Telephone"
						type="tel"
					/>
				</label>
				<label for="Location">
					<h3>Location</h3>
					<input
						value={text}
						onChange={onChange}
						name="Location"
						id="Location"
						type="text"
					/>
				</label>
			</form>
		</div>
	);
}
