import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import config from "../../../website-config"

const PostContainer = styled.div`
    width:31%;
    max-width: 400px;
    margin: 10px 15px;
    padding: 20px;
    min-height: 400px;
    border-radius: 10px;
    border: 1px solid white;

    @media screen and (max-width: 900px) {
        width: 45%;
    }

    @media screen and (max-width: 500px){
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
        color: white;
        text-decoration: none;
    }

    .categories{
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
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
    color: lightgrey;
    line-height: 20px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const Post = ({ post }) => {
    const PF = `${config.serverURL}/images/`

    return (
        <PostContainer>
            {post.photo && <PostImage key={post._id} src={PF + post.photo} alt="" />}
            <PostInfo>
                <div className="categories">
                    {post.categories.map((c, i) => (
                        <PostCategory className="post-cats" key={i}>
                            {c.toUpperCase()}
                        </PostCategory>
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
