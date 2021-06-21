import styled from 'styled-components';

const BlogHeader = styled.div`
  margin-top: 10;
  background: black;
  color: white;
`

const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: 'Dancing Script', cursive; 
`
const BlogSmallTitle = styled.span`
  position: absolute;
  top: 10px;
  font-size: 20px;
`

const BlogBigTitle = styled.span`  
  position: absolute;
  top: 25px;
  font-size: 100px;
`

const BlogCover = styled.img`
  padding-top: 3px;
  width: 100%;
  height: calc(100vh - 160px);
  margin-top: 80px;
  object-fit: cover;
`

const Header = () => {
  return(
    <BlogHeader>
        <HeaderTitles>
          <BlogSmallTitle>My Personal</BlogSmallTitle>
        <BlogBigTitle>Blog</BlogBigTitle>
        </HeaderTitles>
        <BlogCover src={require('../../../content/img/blog-cover.jpg').default}/>
      </BlogHeader>
  )
}

export default Header;