import React from 'react';
import { StyledLink } from './customLink.styles';

const CustomLink = ({ url, ariaLabel, className, children, onClick }) => (
    <StyledLink
        to={url}
        aria-label={ariaLabel}
        className={className}
        activeClassName="active"
        onClick={onClick}
    >
        {children}
    </StyledLink>
);

export default CustomLink;
