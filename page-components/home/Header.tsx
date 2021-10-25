import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../public/img/horizontal_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useThemeContext } from '../../pages/context/theme.context';

export function Header() {
    const themeContext = useThemeContext();

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
                src={Logo}
                alt="Vortex Tecnologia"
                width={200}
                height={200}
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
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
`;

const LogoImage = styled(Image)`
    width: 90px;
    object-fit: contain;
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: auto;
`;

const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    color: ${props => props.theme.text};
    font-weight: 700;
`;

const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;
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
`;