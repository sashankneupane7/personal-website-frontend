import React from 'react'
import styled from 'styled-components'
import Post from './Post'

const PostsContainer = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
`

const Posts = () => {
  return(
    <PostsContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostsContainer>
  )
}

export default Posts;
