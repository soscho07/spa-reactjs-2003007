import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute 
        } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='About' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='Discover' onClick={toggle}>
                        Company
                    </SidebarLink>
                    <SidebarLink to='Services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>
                        Contact Form
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="Mobile No:+8801773143467">
                        Call 017-7314-3467
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
