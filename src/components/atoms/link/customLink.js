import React from 'react';
import { StyledLink } from './customLink.styles';

const CustomLink = ({ to, ariaLabel, className, children }) => (
    <StyledLink
        to={to}
        aria-label={ariaLabel}
        className={className}
    >
        {children}
    </StyledLink>
);


export default CustomLink;