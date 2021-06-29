import React from 'react'
import Maintenance from "../Under Maintenance/Maintenance";

import {SidebarContainer, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Maintenance />
			<CloseIcon onClick={toggle}></CloseIcon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="/" onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to="/blog" onClick={toggle}>
						Blog
					</SidebarLink>
					<SidebarLink to="/projects" onClick={toggle}>
						Projects
					</SidebarLink>
					<SidebarLink to="/about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="/contact" onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/subscribe">Subscribe</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
}

export default Sidebar;
