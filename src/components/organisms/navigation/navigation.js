// @ts-nocheck
import React from 'react'
// import Link from '../../atoms/link/link';
import { StyledNav } from './navigation.styles';
import { navLabels } from './nav.labels';

const Navigation = ({ isOpen, isBlack }) => {

    const isBlackClassName = isBlack
        ? 'color--always-black'
        : isOpen ? 'color-black' : null;

    return (
        <StyledNav $isOpen={isOpen} $black={isBlack}>
            {/* <Link to="/kontakt" className={isBlackClassName}>
                {navLabels.CONTACT}
            </Link>
            <Link to="/nasze-realizacje" className={isBlackClassName}>
                {navLabels.REALIZATIONS}
            </Link> */}
        </StyledNav>
    )
}

export default Navigation;