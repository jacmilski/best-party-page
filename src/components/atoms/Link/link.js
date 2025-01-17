import React from 'react';
import { StyledLink } from './link.styles';

const Link = ({ url, ariaLabel, className, children, ...props }) => (
    <StyledLink
        to={url}
        aria-label={ariaLabel}
        className={className}
    >
        {children}
    </StyledLink>
);


export default Link;