import React from 'react';
import { StyledLink } from './link.styles';

const Link = ({ to, ariaLabel, className, children }) => (
    <StyledLink
        to={to}
        aria-label={ariaLabel}
        className={className}
    >
        {children}
    </StyledLink>
);


export default Link;