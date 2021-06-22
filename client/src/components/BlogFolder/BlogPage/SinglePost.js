import React from "react";
import styled, {css} from "styled-components";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePostContainer = styled.div`
    flex: 9;
`;

const SinglePostWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
    border-radius: 10px;
`;

const SinglePostImage = styled.img`
    width: 100%;
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
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: black;
`;

const SinglePostAuthor = styled.span`
  .link{
    text-decoration: none;
    color: grey;
  }

  .link:hover{
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
    console.log(path);
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            console.log("hey");
            setPost(res.data);
            console.log(res.data);
        };
        getPost();
    }, [path]);
    return (
        <>
            <SinglePostContainer>
                <SinglePostWrapper>
                    {post.photo && <SinglePostImage src={post.photo} alt="" />}
                    <SinglePostTitle>
                        {post.title}
                        <SinglePostEdit>
                            <Icons>
                                <i className="far fa-edit" />
                            </Icons>
                            <Icons>
                                <i className="far fa-trash-alt" />
                            </Icons>
                        </SinglePostEdit>
                    </SinglePostTitle>
                    <SinglePostInfo>
                        <SinglePostAuthor>
                            Author: &ensp;
                            <b>
                                <Link className = "link" to={`/blog/?user=${post.username}`}>{post.username}</Link>
                            </b>
                        </SinglePostAuthor>
                        <SinglePostDate>
                            {new Date(post.createdAt).toDateString()}
                        </SinglePostDate>
                    </SinglePostInfo>
                    <Description>{post.desc}</Description>
                </SinglePostWrapper>
            </SinglePostContainer>
        </>
    );
};
// <i class="fa-solid fa-pen-to-square"></i>
export default SinglePost;
