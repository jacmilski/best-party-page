import React from 'react';
import GlobalStyle from '../../../styles/GlobalStyles';
import Header from '../../organisms/header/header';
import { StyledGlobalWrapper } from '../../../styles/sharedStyles';
import Footer from '../../molecules/footer/footer';

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyle />
        <Header />
        <StyledGlobalWrapper>{children}</StyledGlobalWrapper>
        <Footer />
    </>
);

export default GlobalLayout;
