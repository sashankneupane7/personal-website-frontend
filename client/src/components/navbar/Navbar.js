import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, PpContainer, ProfileImage} from './NavbarElements'

const Navbar = (props) => {
  return (
      <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">Sashank Neupane</NavLogo>
                  <MobileIcon onClick={props.toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/blog">Blog</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/projects">Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/about">About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/contact">Contact</NavLinks>
                      </NavItem>
                  </NavMenu>
                  {/* {!props.user && (
                      <>
                          <NavMenu>
                              <NavItem>
                                  <NavLinks to="/login">Login</NavLinks>
                              </NavItem>
                              <NavItem>
                                  <NavLinks to="/register">Register</NavLinks>
                              </NavItem>
                          </NavMenu>
                      </>
                  )} */}
                  {!props.user && (
                      <>
                          <NavBtn>
                              <NavBtnLink to="/subscribe">Subscribe</NavBtnLink>
                          </NavBtn>
                      </>
                  )}
                  {props.user && (
                      <PpContainer>
                          <ProfileImage
                              src={
                                  require("../../content/img/knahsas.jpg")
                                      .default
                              }
                          />
                      </PpContainer>
                  )}
              </NavbarContainer>
          </Nav>
      </>
  );
}             

export default Navbar
