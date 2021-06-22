import React, { useContext, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/BlogFolder/BlogPage/Sidebar";
import { Context } from "../context/Context";
import axios from "axios";

const SettingsContainer = styled.div`
	display: flex;
`;

const SettingsWrapper = styled.div`
	flex: 9;
	padding: 20px;

	.green {
		color: green;
    text-align: center;
		margin-top: 20px;
		font-size: 20px;
	}
`;

const SettingsTitle = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SettingsUpdateTitle = styled.span`
	font-size: 30px;
	margin-bottom: 20px;
	color: lightcoral;

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
`;

const SettingsDeleteTitle = styled.span`
	color: red;
	font-size: 12px;
	cursor: pointer;

  
`;
const SettingsForm = styled.form`
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	label {
		font-size: 20px;
		margin-top: 20px;
	}

	input {
    padding: 5px;
		color: black;
		margin: 10px 0;
		height: 30px;
		border: none;
		border-bottom: 1px solid lightgrey;
	}
`;

const SettingsPp = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;
`;

const ProfilePicture = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 20px;
	object-fit: cover;
`;

const ProfilePictureIcon = styled.span`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: lightcoral;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	cursor: pointer;
`;
const SettingsSubmit = styled.button`
	width: 150px;
	align-self: center;
	border: none;
	border-radius: 10px;
	color: white;
	background: teal;
	padding: 10px;
	margin-top: 10px;
	cursor: pointer;
`;

export default function Settings() {
  const { user, dispatch } = useContext(Context);
	const [file, setFile] = useState(null);
  const [name, setName] = useState(user.name)
  const [firstname, setFirstName] = useState(user.firstname);
  const [middlename, setMiddleName] = useState(user.middlename);
  const [lastname, setLastName] = useState(user.lastname);
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState(user.password);
  const [success, setSucess] = useState(false);

  const PF = "http://localhost:4567/images/" 

	const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    console.log("hey")
    setName(
			middlename
				? `${firstname} ${middlename} ${lastname}`
				: `${firstname} ${lastname}`
		);
		const updatedUser = {
			userId: user._id,
      name,
      firstname,
      middlename,
      lastname,
			username,
			email,
			password,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await axios.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSucess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
      console.log(err)
    }
    dispatch({ type: "UPDATE_FAILURE" });
	};

	return (
		<SettingsContainer>
			<SettingsWrapper>
				<SettingsTitle>
					<SettingsUpdateTitle>Update Your Account</SettingsUpdateTitle>
					<SettingsDeleteTitle>Delete Account</SettingsDeleteTitle>
				</SettingsTitle>
				<SettingsForm onSubmit={handleUpdate}>
					<label htmlFor="">Profile Picture</label>
					<SettingsPp>
						<ProfilePicture
							src={file ? URL.createObjectURL(file) : PF + user.profilePic}
						/>
						<label htmlFor="fileInput">
							<ProfilePictureIcon>
								<i className="far fa-user-circle"></i>
							</ProfilePictureIcon>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</SettingsPp>
					<label>First Name</label>
					<input
						type="text"
						// placeholder={user.firstname}
						value={firstname}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label>Middle Name</label>
					<input
						type="text"
						placeholder={user.middlename || "Middle Name"}
						value={middlename}
						onChange={(e) => setMiddleName(e.target.value)}
					/>
					<label>Last Name</label>
					<input
						type="text"
						placeholder={user.lastname}
						value={lastname}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<label>Username</label>
					<input
						type="text"
						value={username}
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="email"
						value={email}
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<SettingsSubmit type="submit">Update</SettingsSubmit>
				</SettingsForm>
				{success && <div className="green">Profile has been updated.</div>}
			</SettingsWrapper>
			<SideBar />
		</SettingsContainer>
	);
}
