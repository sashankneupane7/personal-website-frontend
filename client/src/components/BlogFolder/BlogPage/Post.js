import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  width: 300px;
  margin: 20px 25px 40px 25px;
  
  @media screen and (max-width: 900px) {
    margin: 20px auto;
    width: 90%;
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PostCategories = styled.div`

`

const PostCategory = styled.span`
  font-size: 11px;
  color: #b19656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`
const PostTitle = styled.span`
  font-size: 24px;
  margin-top: 15px;
`

const PostDate = styled.span`
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`

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
`

const Post = () => {
  return (
    <PostContainer>
      <PostImage src={require('../../../content/img/blog-cover.jpg').default}/>
      <PostInfo>
        <PostCategories>
          <PostCategory>Music</PostCategory>
          <PostCategory>Life</PostCategory>
        </PostCategories>
        <PostTitle>Lorem ipsum dolor sit.</PostTitle>
        <PostDate>1 hour ago</PostDate>
        <PostDescription>
          {/* <MarkDown src={require('../../../content/blog/coming-soon.md').default} >
          </MarkDown> */}
        </PostDescription>
      </PostInfo>
    </PostContainer>
  )
}
export default Post