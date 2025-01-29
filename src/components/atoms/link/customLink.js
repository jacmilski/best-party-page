import React from 'react';
import { StyledLink } from './customLink.styles';

const CustomLink = ({ url, ariaLabel, className, children }) => (
    <StyledLink
        to={url}
        aria-label={ariaLabel}
        className={className}
    >
        {children}
    </StyledLink>
);


export default CustomLink;