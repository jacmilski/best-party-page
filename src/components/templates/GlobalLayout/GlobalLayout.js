import React from 'react';
import GlobalStyle from '../../../styles/GlobalStyles';
import Header from '../../organisms/header/header';
import { StyledGlobalWrapper } from '../../../styles/sharedStyles';

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyle />
        <Header />
        <StyledGlobalWrapper>
            {children}
        </StyledGlobalWrapper>
        {/* tu będzie Footer */}
    </>
);


export default GlobalLayout;