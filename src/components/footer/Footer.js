import {OuterFooter, FooterContainer, FooterLeft, FooterRight, FooterLinks} from './FooterElements'
import config from '../../website-config'

const Links = [{
  text: 'Latest Posts',
  link: '/blog'
},
  {
    text: 'Github',
    link: config.github
  }, {
    text: 'Twitter',
    link: config.twitter
  }, {
    text: 'Contact',
    link: '/contact'
  }]

const Footer = ()=> {
  return(
    <OuterFooter>
      <FooterContainer>
        <FooterLeft>
          {config.blogTitle} &copy; {new Date().getFullYear()} | Sashank Neupane
        </FooterLeft>
        <FooterRight>
          {Links.map((text, index) => {
            return(
              <FooterLinks key={index}>{text.text}</FooterLinks>
            )
          } )}
        </FooterRight>
      </FooterContainer>
    </OuterFooter>
  )
}

export default Footer;