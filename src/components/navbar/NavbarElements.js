import styled from 'styled-components';
import { Link as LinkR, NavLink} from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  max-width: 100vw;
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  

  @media screen and (max-width: 960) {
    transition:0.8s all ease;

  @media screen and (max-width: 500px){
    max-height: 50px;
    max-width: 100vw;
    min-width: 100vw;
  }
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1100px;

  @media screen and (max-width: 500px){
    max-height: 50px;
  }

`

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  color: white;
  margin: 0 10px;
  padding: 10px 10px;
`

export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 5px;
  height: 100%;
  cursor: pointer;
  color: grey;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  &.active {
    color: white;
  }

  &:hover {
    color: white;
    padding-bottom: 6px;
    font-size: 1.2em;
    transition: all 0.35s ease-in-out;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 20px;
  background: black;
  white-space: nowrap;
  color: white;
  padding: 8px 15px;
  font-size: 16px;
  border: white 1px solid;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
    padding: 9.6px 19.6px;
    border: none;
  }
`

export const PpContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none
  }
`
export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    object-fit: cover;

    &:hover {
        width: 40px;
        height: 40px;
        transition: all 0.3s ease-in-out;
    }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
`