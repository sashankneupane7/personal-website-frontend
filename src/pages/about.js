import styled from 'styled-components'
import Contact from './contact'
import Pen from '../components/icons/Pen'

const HomeOuter = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100vw;
  height: calc(100vh - 60px);
  background: black;
`

const HomeInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  position: relative;

  @media screen and (max-width: 500px){
    flex-direction: column;
    padding: 0 3px;
    font-size: 2rem;
  }
`

const HomeLeft = styled.div`
  width: 50%;
  height: 100%; 
  align-items: center;

  @media screen and (max-width: 500px){
    padding: 0;
    margin: 0;
    padding-top: 50px;
  }
`

const HomeRight = styled.div`
  padding: 40px;
  color: white;
  width: 50%;
  height: 100%;
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 500px){
    padding: 0;
    margin: 0;
    margin-top: 30px;
  }
`


const About = () => {
  return (
		<HomeOuter>
			<HomeInner>
				<HomeLeft>
					<Pen />
				</HomeLeft>
				<HomeRight>
          <Contact />
				</HomeRight>
			</HomeInner>
		</HomeOuter>
	);
}

export default About
