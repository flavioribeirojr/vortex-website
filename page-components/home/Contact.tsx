import { faAngleDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import styled, { css } from 'styled-components';
import { Spinner } from '../../components/Spinner';
import { useThemeContext } from '../../pages/context/theme.context';
import { Breakpoints } from '../../styles/breakpoints';
import { ContactFormValidation, useContact } from './useContact';

export function Contact() {
    const themeContext = useThemeContext();
    const contact = useContact();

    return (
        <ContactSection id="contato">
            <Title>
                Contato
            </Title>
            <Description>
                Ficou com alguma dúvida ou quer falar sobre um projeto para você ou seu negócio?
                Fique a vontade para entrar em contato enviando o formulário abaixo. Nós responderemos
                prontamente!
            </Description>
            <FormWindow mode={themeContext.theme}>
                <FormWindowToolbar>
                    <FormWindowToolbarIcon icon={faCircle} color="#FF5F56" />
                    <FormWindowToolbarIcon icon={faCircle} color="#FFBD2E" />
                    <FormWindowToolbarIcon icon={faCircle} color="#27C93F" />
                </FormWindowToolbar>

                <Formik
                    initialValues={contact.formInitialValues}
                    validationSchema={ContactFormValidation}
                    validateOnBlur
                    onSubmit={contact.submitContact}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <Label>
                                    NOME
                                </Label>
                                <TextInput
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                    hasError={formik.touched.name && formik.errors.name !== undefined}
                                />
                                {
                                    (formik.touched.name && formik.errors.name !== undefined) && (
                                        <ErrorMessage>
                                            { formik.errors.name }
                                        </ErrorMessage>
                                    )
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    EMAIL
                                </Label>
                                <TextInput
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    hasError={formik.touched.email && formik.errors.email !== undefined}
                                />
                                {
                                    (formik.touched.email && formik.errors.email !== undefined) && (
                                        <ErrorMessage>
                                            { formik.errors.email }
                                        </ErrorMessage>
                                    )
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    MOTIVO DO CONTATO
                                </Label>
                                <Dropdown hasError={formik.touched.reason && formik.errors.reason !== undefined}>
                                    <select
                                        name="reason"
                                        onChange={formik.handleChange}
                                        value={formik.values.reason}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="" disabled>Selecione</option>
                                        <option value="PROJETO">
                                            Quero começar um projeto
                                        </option>
                                        <option value="DUVIDA">
                                            Tenho uma dúvida
                                        </option>
                                        <option value="DUVIDA">
                                            Manutenção de software
                                        </option>
                                        <option value="OUTRO">
                                            Outro
                                        </option>
                                    </select>
                                    <DropdownContainer>
                                        <DropdownIcon icon={faAngleDown} />
                                    </DropdownContainer>
                                </Dropdown>
                                {
                                    (formik.touched.reason && formik.errors.reason !== undefined) && (
                                        <ErrorMessage>
                                            { formik.errors.reason }
                                        </ErrorMessage>
                                    )
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    SUA MENSAGEM
                                </Label>
                                <TextArea
                                    rows={10}
                                    name="message"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    onBlur={formik.handleBlur}
                                    hasError={formik.touched.message && formik.errors.message !== undefined}
                                >
                                </TextArea>
                                {
                                    (formik.touched.message && formik.errors.message !== undefined) && (
                                        <ErrorMessage>
                                            { formik.errors.message }
                                        </ErrorMessage>
                                    )
                                }
                            </FormGroup>
                            <SubmitButton>
                                { formik.isSubmitting && <Spinner size={30} /> }
                                { !formik.isSubmitting && 'ENVIAR' }
                            </SubmitButton>
                        </Form>
                    )}
                </Formik>
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
    margin-bottom: 20px;

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

const Description = styled.p`
    text-align: center;
    margin-bottom: 25px;
    line-height: 34px;
    padding: 0 200px;
    color: ${props => props.theme.text};

    @media screen and ${Breakpoints.xs} {
        padding: 0 20px;
    }
`;

const FormWindow = styled.div`
    width: 45%;
    border-radius: 5px;
    background-color: #F0F0F0;

    ${(props: { mode: 'light' | 'dark' }) => props.mode === 'dark' && css`
        background: #1F1E1E;
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
    background-color: ${props => props.theme.inputBackground};
    border-radius: 0;
    border: 2px solid ${props => props.theme.inputBorderColor};
    padding: 0 15px;
    font-size: 16px;
    color: ${props => props.theme.strongText};
    outline: none;

    ${(props: { hasError?: boolean }) => props.hasError && css`
        border-color: red;
    `}
`;

const TextArea = styled.textarea`
    width: 100%;
    background-color: ${props => props.theme.inputBackground};
    border-radius: 0;
    border: 2px solid ${props => props.theme.inputBorderColor};
    padding: 15px;
    font-size: 16px;
    color: ${props => props.theme.strongText};
    outline: none;

    ${(props: { hasError?: boolean }) => props.hasError && css`
        border-color: red;
    `}
`;

const Dropdown = styled.div`
    position: relative;
    width: 100%;
    height: 55px;
    border-radius: 0;
    border: 2px solid ${props => props.theme.inputBorderColor};

    ${(props: { hasError?: boolean }) => props.hasError && css`
        border-color: red;
    `}

    select {
        border: none;
        color: ${props => props.theme.strongText};
        font-size: 16px;
        padding: 0 15px;
        outline: none;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.inputBackground};
        -webkit-appearance: none;
        -moz-appearance: none;

        &::-ms-expand {
            display: none;
        }
    }
`;

const DropdownContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

const DropdownIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.strongText};
    font-size: 16px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 13px;
    margin-top: 4px;
`;

const SubmitButton = styled.button`
    height: 50px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: none;
    background-color: ${props => props.theme.secondary};
    color: white;
    font-size: 15px;
    font-weight: 900;
    box-shadow: 0px 8px 25px rgb(22 227 18 / 54%);
    border-radius: 90px;
    cursor: pointer;
    outline: none;

    @media screen and ${Breakpoints.xs} {
        width: 100%;
    }
`;