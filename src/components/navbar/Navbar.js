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
import config from "../../website-config"
import Maintenance from "../Under Maintenance/Maintenance";

const PF = `${config.serverURL}/images/`;

const Navbar = (props) => {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
    return (
			<>
				<Nav>
					{/* <Maintenance /> */}
					<NavbarContainer>
						<NavLogo to="/">sashankneupane</NavLogo>
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
							{user?.username === "sashankneupane" ? (
								<NavItem>
									<NavLinks to="/blog/write">Write</NavLinks>
								</NavItem>
							) : (
								<>
									<NavItem>
										<NavLinks to="/about">About</NavLinks>
									</NavItem>
									<NavItem>
										<NavLinks to="/contact">Contact</NavLinks>
									</NavItem>
								</>
							)}
						</NavMenu>
						<NavMenu>
						{!user && (
							<>
								<NavBtn>
									<NavBtnLink to="/login">Login</NavBtnLink>
								</NavBtn>
								<NavBtn>
									<NavBtnLink to="/register">Register</NavBtnLink>
								</NavBtn>
							</>
						)}
						{user ? (
							<NavRight>
								<PpContainer>
									<Link to="/settings">
										<ProfileImage src={PF + user.profilePic} alt="" />
									</Link>
								</PpContainer>
								<NavBtn>
									<NavBtnLink to="/" onClick={handleLogout}>
										Logout
									</NavBtnLink>
								</NavBtn>
							</NavRight>
						) : (
							<> </>
						)}
						</NavMenu>

					</NavbarContainer>
				</Nav>
			</>
		);
};

export default Navbar;
