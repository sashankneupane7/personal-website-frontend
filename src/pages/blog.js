import Header from '../components/BlogFolder/BlogPage/Header'
import Posts from '../components/BlogFolder/BlogPage/Posts'
import {BlogContainer} from '../components/BlogFolder/BlogPage/BlogElements'
import SideBar from '../components/BlogFolder/BlogPage/Sidebar'
 
const Blog = () => {
  return (
    <>
      <Header />
      <BlogContainer>
        <Posts>Posts</Posts>
        <SideBar>SideBar</SideBar>
      </BlogContainer>
    </>
  )
}

export default Blog
