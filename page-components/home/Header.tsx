import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useThemeContext } from '../../pages/context/theme.context';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Breakpoints } from '../../styles/breakpoints';
import { ScrollDirection, useScrollWatch } from '../../hooks/useScrollWatch';

export function Header() {
    const themeContext = useThemeContext();
    const { currentScroll, scrollDirection } = useScrollWatch();
    const [ mobileSidebarVisible, setMobileSidebarVisibility ] = React.useState(false);
    const hasScrolled = React.useMemo(() => currentScroll > 90, [currentScroll]);

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
            <HeaderContent
                isScrolled={hasScrolled}
                isScrollingDown={scrollDirection === ScrollDirection.bottom}
            >
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
            </HeaderContent>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 94px;

    @media screen and ${Breakpoints.xs} {
        padding: 15px;
        padding-bottom: 0;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 94px;
    position: relative;

    ${(props: { isScrollingDown?: boolean, isScrolled?: boolean }) => props.isScrolled && css`
        position: fixed;
        left: 0;
        z-index: 10;
        padding: 14px 100px;
        background: ${props => props.theme.background};
        box-shadow: 0 1px 5px ${props => props.theme.boxShadow};

        @media screen and ${Breakpoints.xs} {
            padding: 0 15px;
        }
    `}

    ${(props: { isScrollingDown?: boolean, isScrolled?: boolean }) => props.isScrollingDown && css`
        animation: fadeOut .3s linear 0s 1 normal forwards;
    `}

    ${(props: { isScrollingDown?: boolean, isScrolled?: boolean }) => !props.isScrollingDown && css`
        animation: fadeIn .3s linear 0s 1 normal forwards;
    `}

    @keyframes fadeIn {
        from {
            top: -300px;
        } to {
            top: 0;
        }
    }

    @keyframes fadeOut {
        from {
            top: 0;
        } to {
            top: -300px;
        }
    }
`;

const LogoImage = styled.img`
    height: 65px;
    object-fit: contain;

    @media screen and ${Breakpoints.xs} {
        height: 55px;
    }
`;

const HeaderRightContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;

    @media screen and ${Breakpoints.xs} {
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

    @media screen and ${Breakpoints.xs} {
        display: block;
    }
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;

    @media screen and ${Breakpoints.xs} {
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

    @media screen and ${Breakpoints.xs} {
        padding: 20px 0;
    }
`;

const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;

    @media screen and ${Breakpoints.xs} {
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
    font-size: 16px;

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

    @media screen and ${Breakpoints.xs} {
        font-size: 18px;
    }
`;

const SideBarToggler = styled.button`
    border: none;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
    display: none;

    @media screen and ${Breakpoints.xs} {
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

    @media screen and ${Breakpoints.xs} {
        display: block;
    }
`;

const SidebarCloseIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.strongText};
    font-size: 20px;
`;