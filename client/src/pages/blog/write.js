import React, { useContext, useState } from "react";
import styled from "styled-components";
import "./css/write.css";
import axios from "axios";
import { Context } from "../../context/Context";

const WriteContainer = styled.div`
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const WriteForm = styled.form`
	position: relative;
`;

const WriteImage = styled.img`
	margin: 0 auto;
	width: 80vw;
	height: 250px;
	border-radius: 10px;
	object-fit: cover;
`;

const WriteFormGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 80vw;
	margin: 0 auto;

	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
	}

  textarea {
    resize: none;
  }
`;

const WriteSubmit = styled.button`
	color: white;
	background-color: teal;
	padding: 10px;
	border-radius: 10px;
	cursor: pointer;
	font-size: 16px;
`;

export default function Write() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
    e.preventdefault()
    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append("file", file);
      newPost.photo = filename;
      try{
        await axios.post("/upload", data)
      } catch(err){

      }
    }
		try {
			const res = await axios.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (err) {}
	};

	return (
		<WriteContainer>
			{file && <WriteImage src={URL.createObjectURL(file)} />}
			<WriteForm>
				<WriteFormGroup onSubmit={handleSubmit}>
					<div className="title">
						<label className="writeIcon" htmlFor="fileInput">
							<i className="fas fa-plus"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<input
							className="writeInput"
							type="text"
							placeholder="Title"
							autoFocus={true}
							onChange={(e) => {setTitle(e.target.value)}}
						/>
						<WriteSubmit type="submit">Publish</WriteSubmit>
					</div>
					<textarea
						className="writeText writeInput"
						placeholder="Tell your story..."
						type="text"
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</WriteFormGroup>
			</WriteForm>
		</WriteContainer>
	);
}
