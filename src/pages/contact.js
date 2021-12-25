import styled from 'styled-components'
import { Facebook, Github, Instagram, Twitter } from '../components/icons/SocialMedia'
import config from '../website-config'
import {Link} from 'react-router-dom'

const ContactContainer = styled.div`
  min-height: calc(100vh - 60px);
`
const Welcome = styled.div`
  margin: 50px;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 500px){
    font-size: 2rem;
    margin-bottom: 5px;
    margin-top: -30px;
    padding: 0;
  }
`

const Introduction = styled.div`
  font-size: 2rem;
  margin: 50 auto;
  max-width: 80 vw;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    padding: 0;
  }
`

const Description = styled.div`
  margin: 50px auto;
  font-size: 2rem;
  max-width: 80vw;

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

const Contact = () => {
  return (
      <>
        <ContactContainer> 
          <Welcome>Heyya!</Welcome>
					<Introduction>I am Sashank from Nepal.</Introduction>
					<Description>
            Currently, I am an undergraduate student at New York University Abu Dhabi. I am majoring in Computer Science with a minor in Applied Mathematics.
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
        </ContactContainer>
      </>
  );
}

export default Contact
