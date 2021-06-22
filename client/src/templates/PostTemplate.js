import React from 'react'
import styled from 'styled-components'
import SinglePost from '../components/BlogFolder/BlogPage/SinglePost'
import SideBar from '../components/BlogFolder/BlogPage/Sidebar'


const PostTemplateContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`

const PostTemplate = () => {
  return (
    <PostTemplateContainer>
      <SinglePost />
      <SideBar />
    </PostTemplateContainer>
  )
}

export default PostTemplate;
