import React from 'react';
import { StyledHamburgerBox, StyledHamburgerButton, StyledHamburgerInner } from './customHanburgerButton.styles';

// @ts-ignore
const CustomHamburgerButton = ({ openMenu, isOpen, isBlack }) => {

    return (<StyledHamburgerButton
        onClick={openMenu}
        // @ts-ignore
        $isOpen={isOpen}
    >
        <StyledHamburgerBox>
            <StyledHamburgerInner
// @ts-ignore
            $isOpen={isOpen} $isBlack={isBlack} />
        </StyledHamburgerBox>
    </StyledHamburgerButton>);
}

export default CustomHamburgerButton;
