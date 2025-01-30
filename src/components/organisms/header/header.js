import React, { useState } from 'react';
import CustomHamburgerButton from '../../atoms/hamburgerButton/customHamburgerButton';
import { useLocation } from '@reach/router';
import { StyledHeader, StyledLogo } from './header.styles';
import Navigation from '../navigation/navigation';

import Logo from '../../icons/logo';


const Header = () => {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const isOurRealizationPage =
        location.pathname === '/nasze-realizacje' ||
        location.pathname.includes('/realizacj/');

return (
    <StyledHeader>
        <StyledLogo to={'/'}>
            <Logo
                isBlack={isOurRealizationPage
                    || location.pathname === '/kontakt/'
                    || location.pathname === '/nasze-realizacje/'
                }
            />
        </StyledLogo>
        <Navigation
            isOpen={isOpen}
            isBlack={isOurRealizationPage
                || location.pathname === '/nasze-realizacje/'
            }
        />
        <CustomHamburgerButton
// @ts-ignore
            openMenu={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
            isBlack={isOurRealizationPage
                || location.pathname === '/kontakt/'
                || location.pathname === '/nasze-realizacje/'
            }
        />
    </StyledHeader>
    )
}

export default Header;