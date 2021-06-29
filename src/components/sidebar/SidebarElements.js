// import {Link as LinkS} from 'react-scroll';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen? '100%': '0')};
  top: ${({isOpen}) => (isOpen?'0':'-100%')};
`

export const CloseIcon = styled(FaTimes)`
  position: absolute;
	color: white;
	font-size: 1.7rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	outline: none;
  right: 20px;
  top: 40px;

	&:hover {
		font-size: 1.8rem;
		transition: all 0.2s ease-in-out;
	}
`;

export const SidebarWrapper = styled.div`
  color: white;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    font-size: 1.6rem;
    transition: 0.2s ease-in-out;
    background: white;
    color: black;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(Link)`
  border-radius: 20px;
  background: black;
  white-space: nowrap;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  outline: none;
  border: white 1px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
    border: none;
  }
`