import React from 'react';
import { StyledButton, StyledLink } from './button.styles';

const Button = ({ text, type, href }) => (
    href ? (
        <StyledLink to={href}>{text}</StyledLink>
    ) : (
        <StyledButton type={type}>{text}</StyledButton>
    )
);
export default Button;
