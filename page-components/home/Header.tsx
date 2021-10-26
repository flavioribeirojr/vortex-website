import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useThemeContext } from '../../pages/context/theme.context';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function Header() {
    const themeContext = useThemeContext();
    const [ mobileSidebarVisible, setMobileSidebarVisibility ] = React.useState(false);

    function toggleSidebarVisibility() {
        setMobileSidebarVisibility(!mobileSidebarVisible);
    }

    function toggleTheme() {
        if (themeContext.theme === 'light') {
            themeContext.setTheme('dark');
            return;
        }

        themeContext.setTheme('light');
    }

    return (
        <HeaderContainer>
            <LogoImage
                src="/img/horizontal_logo.png"
                alt="Vortex Tecnologia"
            />
            <HeaderRightContainer mobileVisible={mobileSidebarVisible}>
                <HeaderSidebarLogo
                    src="/img/horizontal_logo.png"
                    alt="Vortex Tecnologia"
                />
                <NavBar>
                    <NavLink href="#about">
                        Sobre a Vortex
                    </NavLink>
                    <NavLink href="#contact">
                        Benefícios
                    </NavLink>
                    <NavLink href="#contact">
                        Contato
                    </NavLink>
                </NavBar>
                <ThemeSwitcher>
                    <ThemeSwitcherLight icon={faSun} />
                    <TheSwitcherToggle className="pretty p-switch p-fill">
                        <input
                            type="checkbox"
                            checked={themeContext.theme === 'dark'}
                            onChange={toggleTheme}
                        />
                        <div className="state">
                            <label></label>
                        </div>
                    </TheSwitcherToggle>
                    <ThemeSwitcherDark icon={faMoon} />
                </ThemeSwitcher>
                <SidebarClose onClick={toggleSidebarVisibility}>
                    <SidebarCloseIcon icon={faTimes} />
                </SidebarClose>
            </HeaderRightContainer>
            <SideBarToggler onClick={toggleSidebarVisibility}>
                <SideBarTogglerIcon icon={faBars} />
            </SideBarToggler>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 14px 0;

    @media(max-width: 940px) {
        padding: 15px;
        padding-bottom: 0;
    }
`;

const LogoImage = styled.img`
    height: 65px;
    object-fit: contain;

    @media(max-width: 940px) {
        height: 55px;
    }
`;

const HeaderRightContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;

    @media(max-width: 940px) {
        width: 100vw;
        transform: translateX(100vw);
        transition: transform .3s linear;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        background-color: ${props => props.theme.background};
        bottom: 0;
        display: flex;
        flex-direction: column;
        padding: 50px 0;
        padding-top: 25px;

        ${(props: { mobileVisible?: boolean }) => props.mobileVisible && css`
            transform: translateX(0);
        `}
    }
`;

const HeaderSidebarLogo = styled.img`
    margin-bottom: 25px;
    height: 50px;
    object-fit: contain;
    display: none;

    @media(max-width: 940px) {
        display: block;
    }
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;

    @media(max-width: 940px) {
        flex-direction: column;
        height: auto;
    }
`;

const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    color: ${props => props.theme.strongText};
    font-weight: 700;

    @media(max-width: 940px) {
        padding: 20px 0;
    }
`;

const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;

    @media(max-width: 940px) {
        margin: 0 auto;
        margin-top: auto;
    }
`;

const ThemeSwitcherLight = styled(FontAwesomeIcon)`
    color: #F6EB86;
    font-size: 22px;
    margin-right: 8px;
`;

const ThemeSwitcherDark = styled(FontAwesomeIcon)`
    color: #7C4CE1;
    font-size: 20px;
    margin-left: 8px;
`;

const TheSwitcherToggle = styled.div`
    font-size: 17px;

    &.pretty.p-switch .state label:after, .pretty.p-switch .state label:before {
        left: 2px;
    }
    &.pretty.p-switch .state:before {
        border: 2px solid ${props => props.theme.primary};
    }

    &.pretty.p-switch .state label:after {
        background-color: ${props => props.theme.primary};
    }

    &.pretty.p-switch.p-fill input:checked~.state:before {
        background-color: ${props => props.theme.primary}!important;
        border-color: ${props => props.theme.primary};
    }

    @media(max-width: 940px) {
        font-size: 18px;
    }
`;

const SideBarToggler = styled.button`
    border: none;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
    display: none;

    @media(max-width: 940px) {
        display: block;
    }
`;

const SideBarTogglerIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.strongText};
    font-size: 24px;
`;

const SidebarClose = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 10px;
    display: none;

    @media(max-width: 940px) {
        display: block;
    }
`;

const SidebarCloseIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.strongText};
    font-size: 20px;
`;