import React from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';

const lightTheme = {
    strongText: 'black',
    text: '#727272',
    background: 'white',
    primary: '#E51199',
    secondary: '#3AFF36',
    boxShadow: '#c9c9c94f',
    inputBackground: 'white',
    inputBorderColor: '#e1e1e1'
};

const darkTheme = {
    strongText: 'white',
    text: '#E3E3E3',
    background: '#241D34',
    primary: '#E51199',
    secondary: '#3AFF36',
    boxShadow: '#101010cf',
    inputBackground: '#2B2B2B',
    inputBorderColor: '#282828'
};

export const ThemeContext = React.createContext<ThemeState>({
    theme: 'light',
    setTheme: () => {}
});

export function useThemeContext() {
    const context = React.useContext(ThemeContext);

    return context;
}

export function ThemeProvider(props: ThemeProviderProps) {
    const [ theme, setTheme ] = React.useState<ThemeState['theme']>('light');
    const [ cookie, setCookie ] = useCookies(['theme']);

    React.useEffect(() => {
        if (props.initialTheme) {
            setTheme(props.initialTheme);
        }
    }, [props.initialTheme]);

    function changeTheme(theme: ThemeState['theme']) {
        setTheme(theme);
        setCookie('theme', theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            <ThemeContext.Consumer>
                {
                    ({ theme }) => (
                        <BaseThemeProvider theme={ theme === 'dark' ? darkTheme : lightTheme }>
                            { props.children }
                        </BaseThemeProvider>
                    )
                }
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    );
}

interface ThemeProviderProps {
    initialTheme?: ThemeState['theme'];
    children: React.ReactNode;
}

export interface ThemeState {
    theme: 'light' | 'dark';
    setTheme: (theme: ThemeState['theme']) => void;
}