import React, { useState } from 'react';
// import HamburgerButton from '../../atoms/hamburgerButton/hamburgerButton';
import { useLocation } from '@reach/router';
import { StyledHeader, StyledLogo } from './header.styles';
import Navigation from '../navigation/navigation';

import Logo from '../../icons/logo';


const Header = () => {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const isOurRealizationPage = 
        location.pathname === '/nasze-realizacje' ||
        location.pathname.includes('/realizacja/');

return (
    <StyledHeader>
        <StyledLogo to={'/'}>
            <Logo
                isBlack={isOurRealizationPage || location.pathname === '/kontakt/'} 
            />
        </StyledLogo>
        <Navigation
            isOpen={isOpen}
            isBlack={isOurRealizationPage}
        />
        {/* <HamburgerButton
            ariaLabel={undefined}
            openMenu={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
            isBlack={isOurRealizationPage}
            children={undefined}
        /> */}
    </StyledHeader>
    )
}

export default Header;