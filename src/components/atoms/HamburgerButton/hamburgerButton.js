// @ts-nocheck
import React from 'react';
import { StyledHamburgerBox, StyledHamburgerButton, StyledHamburgerInner } from './hanburgerButton.styles';

const HamburgerButton = ({ ariaLabel, openMenu, isOpen, isBlack, children }) =>
    <StyledHamburgerButton
        aria-label={ariaLabel}
        onClick={openMenu}
        $isOpen={isOpen}
    >
        <StyledHamburgerBox>
            <StyledHamburgerInner $isOpen={isOpen} $isBlack={isBlack} />
        </StyledHamburgerBox>
    </StyledHamburgerButton>;


export default HamburgerButton;
