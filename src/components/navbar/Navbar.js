import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    PpContainer,
    ProfileImage,
    NavRight
} from "./NavbarElements";

const PF = "http://localhost:4567/images/";

const Navbar = (props) => {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
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
							{user.username === "sashankneupane" ? <NavItem><NavLinks to="/blog/write">Write</NavLinks></NavItem> : <><NavItem>
								<NavLinks to="/about">About</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/contact">Contact</NavLinks>
							</NavItem></>}
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
						{!user && (
							<>
								<NavBtn>
									<NavBtnLink to="/subscribe">Subscribe</NavBtnLink>
								</NavBtn>
							</>
						)}
						{user && (
							<NavRight>
								<PpContainer>
									<Link to="/settings">
										<ProfileImage src={ PF + user.profilePic} alt="" />
									</Link>
								</PpContainer>
								<NavBtn>
									<NavBtnLink to="/" onClick={handleLogout}>
										Logout
									</NavBtnLink>
								</NavBtn>
							</NavRight>
						)}
					</NavbarContainer>
				</Nav>
			</>
		);
};

export default Navbar;
