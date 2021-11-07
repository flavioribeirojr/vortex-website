import { FormikHelpers } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

export function useContact() {
    const [ formInitialValues ] = React.useState<ContactFormValues>({
        name: '',
        reason: '',
        email: '',
        message: ''
    });

    async function submitContact(values: ContactFormValues, helpers: FormikHelpers<ContactFormValues>) {
        helpers.setSubmitting(true);

        try {
            const formData = new FormData();
            formData.set('name', values.name);
            formData.set('email', values.email);
            formData.set('reason', values.reason);
            formData.set('message', values.message);

            await fetch('https://formspree.io/f/xgerjdqp', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            toast.success('Obrigado por seu contato!');
        } catch (err) {
            console.log(err);

            toast.error('Algo saiu errado. Por favor tente novamente mais tarde.');
        } finally {
            helpers.setSubmitting(false);
        }
    }

    return {
        formInitialValues,
        submitContact
    }
}

export interface ContactFormValues {
    name: string;
    email: string;
    reason: string;
    message: string;
}

export const ContactFormValidation = Yup.object().shape({
    name: Yup.string().required('Por favor informe seu nome'),
    email: Yup.string().email('Informe um email válido').required('Por favor informe seu email'),
    reason: Yup.string().required('Por favor informe o motivo do contato'),
    message: Yup.string().required('Por favor informe o motivo do seu contato')
});