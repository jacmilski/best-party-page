import React from 'react';
import { StyledButton, StyledLink } from './customButton.styles';

const CustomButton = ({ text, type, href }) =>
    href ? (
        <StyledLink to={href}>{text}</StyledLink>
    ) : (
        <StyledButton type={type}>{text}</StyledButton>
    );
export default CustomButton;
