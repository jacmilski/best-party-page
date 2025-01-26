// @ts-nocheck
import React from 'react'
import CustomLink from '../../atoms/link/customLink';
import { StyledNav } from './navigation.styles';
import { navLabels } from './nav.labels';

const Navigation = ({ isOpen, isBlack }) => {

    const isBlackClassName = isBlack
        ? 'color--always-black'
        : isOpen ? 'color-black' : null;

    return (
        <StyledNav $isOpen={isOpen} $black={isBlack}>
            <CustomLink to={`/kontakt`} className={isBlackClassName}>
                {navLabels.CONTACT}
            </CustomLink>
            <CustomLink to={`/nasze-realizacje`} className={isBlackClassName}>
                {navLabels.REALIZATIONS}
            </CustomLink>
        </StyledNav>
    )
}

export default Navigation;