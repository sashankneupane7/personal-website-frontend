import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import config from "../../../website-config"

const SinglePostWrapper = styled.div`
	flex: 9;
	padding: 0 10px 10px 10px;

	.writeInput {
		font-size: 30px;
		width: 100%;
		margin: 10px 0;
		margin-bottom: 10px;
		padding: 10px;
		padding-bottom: 3px;
		color: gray;
		text-align: center;
		border-bottom: lightgrey 1px solid;
	}

	.writeInput:focus,
	.writeText:focus {
		outline: none;
	}

	.writeText {
		font-size: 20px;
		height: 100vh;
		width: 100%;
		resize: none;
		border: none;
	}

	.singlePostBtn {
		border: none;
		background: teal;
		padding: 5px;
		width: 100px;
		color: white;
		border-radius: 5px;
		cursor: pointer;
		align-self: flex-end;
		margin-top: 20px;
	}
`;

const SinglePostImage = styled.img`
	margin: 0 auto;
	width: 90%;
	height: 400px;
	border-radius: 10px;
	object-fit: cover;
`;

const SinglePostTitle = styled.h1`
	text-align: center;
	margin: 10px;
	font-size: 28px;
`;

const SinglePostEdit = styled.div`
	float: right;
	font-size: 16px;
`;

const Icons = styled.span`
	margin-left: 10px;
	cursor: pointer;

	&:first-child {
		color: green;
	}

	&:last-child {
		color: red;
	}
`;

const SinglePostInfo = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	color: black;
`;

const SinglePostAuthor = styled.span`
	.link {
		text-decoration: none;
		color: grey;
	}

	.link:hover {
		color: black;
	}
`;

const SinglePostDate = styled.span``;

const Description = styled.p`
	color: black;
	font-size: 18px;
	line-height: 25px;

	&::first-letter {
		margin-left: 20px;
		font-size: 30px;
		font-weight: 600;
	}
`;

const SinglePost = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const { user } = useContext(Context);
	const PF = `${config.serverURL}/images/`;

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`${config.serverURL}/posts/` + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleUpdate = async () => {
		try {
			await axios.put(`${config.serverURL}/posts/${post._id}`, {username: user.username, title, desc }
			);
            window.location.reload();
		} catch (err) {}
        setUpdateMode(false);
	};

	const handleDelete = async (e) => {
		console.log(user.username);
		try {
			await axios.delete(`${config.serverURL}/posts/` + path, {
				data: { username: user.username },
			});
		} catch (err) {}
	};

	return (

				<SinglePostWrapper>
					{post.photo && <SinglePostImage src={PF + post.photo} alt="" />}

					{updateMode ? (
						<input
							className="writeInput"
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					) : (
						<SinglePostTitle>
							{title}
							{post.username === user?.username && (
								<SinglePostEdit>
									<Icons>
										<i
											className="far fa-edit"
											onClick={() => setUpdateMode(true)}
										/>
									</Icons>
									<Icons>
										<i className="far fa-trash-alt" onClick={handleDelete} />
									</Icons>
								</SinglePostEdit>
							)}
						</SinglePostTitle>
					)}
					<SinglePostInfo>
						<SinglePostAuthor>
							Author: &ensp;
							<b>
								<Link className="link" to={`/blog/?user=${post.username}`}>
									{post.username}
								</Link>
							</b>
						</SinglePostAuthor>
						<SinglePostDate>
							{new Date(post.createdAt).toDateString()}
						</SinglePostDate>
					</SinglePostInfo>
					{updateMode ? (
						<textarea
							className="writeText"
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
						></textarea>
					) : (
						<Description>{desc}</Description>
					)}
					{updateMode && (
						<button className="singlePostBtn" onClick={handleUpdate}>
							Update
						</button>
					)}
				</SinglePostWrapper>
	);
};
// <i class="fa-solid fa-pen-to-square"></i>
export default SinglePost;
