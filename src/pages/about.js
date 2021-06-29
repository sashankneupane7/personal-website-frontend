import styled from 'styled-components'
import Pen from '../components/icons/Pen'
import { Facebook, Github, Instagram, Twitter } from '../components/icons/SocialMedia'
import config from '../website-config'
import {Link} from 'react-router-dom'

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

const Welcome = styled.div`
  margin: 50px;
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;

  @media screen and (max-width: 500px){
    font-size: 2rem;
    margin-bottom: 5px;
    margin-top: -30px;
    padding: 0;
  }
`

const Introduction = styled.div`
  font-size: 2rem;
  margin-top: 70px;
  margin-bottom: 20px;
  font-family: 'Dancing Script', cursive;

  @media screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: 1.5rem;
    margin-bottom: 5px;
    padding: 0;
  }
`

const Description = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;

  @media screen and (max-width: 500px) {
    margin: 5px 0;
    padding: 0;
    font-size: 1.5rem;
  }
`

const SocialLinks = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 100%;
  list-style: none;

  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`
const Social = styled(Link)`
  margin: 0;
  fill: white;
  height: 30px;
  width: 15%;
  padding: 10px;

  @media screen and (max-width: 500px) {
    padding-left: 3px;
    padding-right: 3px;
    height: 30px;
    width: 30px;
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
					<Welcome>Welcome!</Welcome>
					<Introduction>I am Sashank from Nepal.</Introduction>
					<Description>
						And, this is my personal portfolio where I pen down my thoughts,
						experiences, and findings.
					</Description>
					<SocialLinks>
						<Social
							to={{ pathname: config.github }}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github />
						</Social>
						<Social
							to={{ pathname: config.facebook }}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Facebook />
						</Social>
						<Social
							to={{ pathname: config.instagram }}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram />
						</Social>
						<Social
							to={{ pathname: config.twitter }}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter />
						</Social>
					</SocialLinks>
				</HomeRight>
			</HomeInner>
		</HomeOuter>
	);
}

export default About
