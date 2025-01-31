// @ts-nocheck
import React from 'react';
import CustomLink from '../../atoms/link/customLink';
import { StyledNav } from './navigation.styles';
import { navLabels } from './nav.labels';

const Navigation = ({ isOpen, isBlack, setIsOpen }) => {
    const isBlackClassName = isBlack
        ? 'color--always-black'
        : isOpen
          ? 'color-black'
          : null;

    return (
        <StyledNav $isOpen={isOpen} $black={isBlack}>
            <CustomLink
                url="/kontakt"
                className={isBlackClassName}
                onClick={() => setIsOpen(false)}
            >
                {navLabels.CONTACT}
            </CustomLink>
            <CustomLink
                url="/nasze-realizacje"
                className={isBlackClassName}
                onClick={() => setIsOpen(false)}
            >
                {navLabels.REALIZATIONS}
            </CustomLink>
        </StyledNav>
    );
};

export default Navigation;
