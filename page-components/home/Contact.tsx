import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { useThemeContext } from '../../pages/context/theme.context';
import { Breakpoints } from '../../styles/breakpoints';

export function Contact() {
    const themeContext = useThemeContext();

    return (
        <ContactSection>
            <Title>
                Contato
            </Title>
            <FormWindow mode={themeContext.theme}>
                <FormWindowToolbar>
                    <FormWindowToolbarIcon icon={faCircle} color="#FF5F56" />
                    <FormWindowToolbarIcon icon={faCircle} color="#FFBD2E" />
                    <FormWindowToolbarIcon icon={faCircle} color="#27C93F" />
                </FormWindowToolbar>

                <Form>
                    <FormGroup>
                        <Label>
                            NOME
                        </Label>
                        <TextInput
                            name="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            EMAIL
                        </Label>
                        <TextInput
                            name="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            SUA MENSAGEM
                        </Label>
                        <TextArea rows={10}>
                        </TextArea>
                    </FormGroup>
                    <SubmitButton>
                        ENVIAR
                    </SubmitButton>
                </Form>
            </FormWindow>
        </ContactSection>
    );
}

const ContactSection = styled.section`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 15px;
    text-align: center;
    padding: 10px;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    color: ${props => props.theme.strongText};
    margin-bottom: 40px;

    &::before {
        content: '';
        height: 1px;
        width: 110%;
        background-color: ${props => props.theme.text};
        position: absolute;
        bottom: 0;
        left: -5%;
    }
`;

const FormWindow = styled.div`
    width: 45%;
    border-radius: 5px;
    background-color: #F0F0F0;

    ${(props: { mode: 'light' | 'dark' }) => props.mode === 'dark' && css`
        background: #1F1E1E;

        input, textarea {
            background-color: #2B2B2B;
            border: 2px solid #282828;
        }
    `}

    @media screen and ${Breakpoints.xs} {
        width: 90%;
    }
`;

const FormWindowToolbar = styled.div`
    width: 100%;
    padding: 8px;
    background-color: black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const FormWindowToolbarIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
    margin-right: 8px;
    color: ${props => props.color};
`;

const Form = styled.form`
    padding: 20px 50px;

    @media screen and ${Breakpoints.xs} {
        padding: 20px 30px;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
    color: ${props => props.theme.strongText};
`;

const TextInput = styled.input`
    width: 100%;
    height: 55px;
    background-color: white;
    border-radius: 0;
    border: 2px solid black;
    padding: 0 15px;
    font-size: 16px;
    color: ${props => props.theme.strongText};
    outline: none;
`;

const TextArea = styled.textarea`
    width: 100%;
    background-color: white;
    border-radius: 0;
    border: 2px solid black;
    padding: 15px;
    font-size: 16px;
    color: ${props => props.theme.strongText};
    outline: none;
`;

const SubmitButton = styled.button`
    height: 50px;
    width: 70%;
    display: block;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
    color: white;
    font-size: 15px;
    font-weight: 800;

    @media screen and ${Breakpoints.xs} {
        width: 100%;
    }
`;