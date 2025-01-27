import * as yup from 'yup';

export const formValidationSchema = yup.object({
    name: yup
        .string()
        .required('Imię jest wymagane'),
    email: yup
        .string()
        .email('Niewłaściwy format adresu email')
        .required('Email jest wymagany'),
    message: yup
        .string()
        .min(3, 'Wiadomość musi mieć co najmniej 3 znaki')
        .required('Wiadomość jest wymagana')
});

export const messageLabels = {
    globalError: 'Wystąpił błąd. Spróbuj ponownie później!',
    successMessage: 'Wiadomość została wysłana pomyślnie!',
}