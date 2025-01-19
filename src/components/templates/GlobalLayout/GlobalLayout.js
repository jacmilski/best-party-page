import React from 'react';
import GlobalStyle from '../../../styles/GlobalStyles';

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyle />
        {/* tu będzie Header */}
        {children}
        {/* tu będzie Footer */}
    </>
);


export default GlobalLayout;