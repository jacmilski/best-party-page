import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledContact,
    StyledForm,
    StyledGlobalError,
    StyledSuccessMessage,
} from './contact.styles';
import { StyledSecondTitle } from '../../../styles/sharedStyles';
import CustomInput from '../../atoms/customInput/customInput';
import CustomButton from '../../atoms/button/customButton';
import { formValidationSchema, messageLabels } from './contact.data';

const Contact = ({ isContactPage }) => {
    const [isSend, setIsSend] = useState(false);
    const [isError, setIsError] = useState(false);

    const { datoCmsContactSection } = useStaticQuery(graphql`
        query ContactQuery {
            datoCmsContactSection {
                contactSectionTitle
                nameLabel
                emailLabel
                messageLabel
                buttonText
            }
        }
    `);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(formValidationSchema),
    });

    const encode = (data) => {
        const encodedData = Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');

        return encodedData;
    };

    const onSubmit = (data) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'kontakt', ...data }),
        })
            .then(() => {
                setIsError(false);
                setIsSend(true);
                reset();
            })
            .catch(() => {
                setIsError(true);
            });
    };

    const fields = [
        {
            type: 'text',
            name: 'name',
            label: datoCmsContactSection.nameLabel,
        },
        {
            type: 'text',
            name: 'email',
            label: datoCmsContactSection.emailLabel,
        },
        {
            type: 'textarea',
            name: 'message',
            label: datoCmsContactSection.messageLabel,
        },
    ];

    return (
        <StyledContact
            // @ts-ignore
            $isContactPage={isContactPage}
        >
            <StyledSecondTitle>
                {datoCmsContactSection.contactSectionTitle}
            </StyledSecondTitle>
            <StyledForm
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                name="kontakt"
                data-netlify="true"
            >
                {fields.map(({ type, name, label }) => (
                    <CustomInput
                        key={label}
                        type={type}
                        name={name}
                        label={label}
                        error={errors?.[name]?.message}
                        // @ts-ignore
                        register={register(name)}
                    />
                ))}
                <CustomButton
                    text={datoCmsContactSection.buttonText}
                    type="submit"
                    href={null}
                />
            </StyledForm>
            {isError ? (
                <StyledGlobalError>
                    {messageLabels.globalError}
                </StyledGlobalError>
            ) : null}
            {isSend ? (
                <StyledSuccessMessage>
                    {messageLabels.successMessage}
                </StyledSuccessMessage>
            ) : null}
        </StyledContact>
    );
};

export default Contact;
