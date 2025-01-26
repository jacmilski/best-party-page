import React from 'react';
import { StyledHamburgerBox, StyledHamburgerButton, StyledHamburgerInner } from './customHanburgerButton.styles';

// @ts-ignore
const CustomHamburgerButton = ({ ariaLabel, openMenu, isOpen, isBlack, children }) =>
    <StyledHamburgerButton
        aria-label={ariaLabel}
        onClick={openMenu}
        // @ts-ignore
        $isOpen={isOpen}
    >
        <StyledHamburgerBox>
            <StyledHamburgerInner 
// @ts-ignore
            $isOpen={isOpen} $isBlack={isBlack} />
        </StyledHamburgerBox>
    </StyledHamburgerButton>;


export default CustomHamburgerButton;
