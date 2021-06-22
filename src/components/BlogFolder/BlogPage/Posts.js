import React from "react";
import styled from "styled-components";
import Post from "./Post";

const PostsContainer = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
`;

const Posts = ({posts}) => {
    return (
        <>
          <PostsContainer>
              {posts.map((p) => (
                  <Post key={p.title} post={p}/>
              ))}
          </PostsContainer>
        </>
    );
};

export default Posts;
