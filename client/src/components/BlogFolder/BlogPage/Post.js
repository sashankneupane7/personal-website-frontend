import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const PostContainer = styled.div`
    width: 300px;
    margin: 20px 25px 40px 25px;

    @media screen and (max-width: 900px) {
        margin: 20px auto;
        width: 90%;
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
`;

const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .link {
        font-size: 24px;
        margin-top: 15px;
        color: black;
        text-decoration: none;
    }
`;

const PostCategory = styled.span`
    font-size: 11px;
    color: #b19656;
    line-height: 20px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
`;

const PostDate = styled.span`
    font-style: italic;
    font-size: 13px;
    color: #999;
    margin-top: 15px;
`;

const PostDescription = styled.p`
    font-size: 14px;
    color: #444;
    line-height: 20px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const Post = ({ post }) => {
    return (
        <PostContainer>
            {post.photo && <PostImage key={post._id} src={post.photo} alt="" />}
            <PostInfo>
                <div>
                    {post.categories.map((c, i) => (
                        <PostCategory key={i}>{c.name}</PostCategory>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    {post.title}
                </Link>
                <PostDate>{new Date(post.createdAt).toDateString()}</PostDate>
                <PostDescription>{post.desc}</PostDescription>
            </PostInfo>
        </PostContainer>
    );
};
export default Post;
