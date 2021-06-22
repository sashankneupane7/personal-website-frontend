import {OuterFooter, FooterContainer, FooterLeft, FooterRight, FooterLinks} from './FooterElements'
import config from '../../website-config'
import {useState, useEffect} from 'react'

const Links = [{
  text: 'Latest Posts',
  link: '/blog',
  displayMobile: true,
},
  {
    text: 'Github',
    link: config.github,
    displayMobile: false,
  }, {
    text: 'Twitter',
    link: config.twitter,
    displayMobile: false,
  }, {
    text: 'Contact',
    link: '/contact',
    displayMobile: true,
  }]

const Footer = ()=> {
  // To make Github and Twitter disappear on mobile view
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth)
    }
  
  window.addEventListener('resize', handleResize)
  })

  return(
    <OuterFooter>
      <FooterContainer>
        <FooterLeft>
          {config.title} &copy; {new Date().getFullYear()}
        </FooterLeft>
        <FooterRight>
          {/* filtering the links first and mapping it to styled components */}
          {Links.filter(elm => width > 768 || elm.displayMobile).map(elm => <FooterLinks key={elm.text}>{elm.text}</FooterLinks>)}
        </FooterRight>
      </FooterContainer>
    </OuterFooter>
  )
}

export default Footer;