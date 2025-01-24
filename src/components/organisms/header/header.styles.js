import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 23px;
    max-width: 1920px;
    z-index: 999;
`;
export const StyledLogo = styled(Link)``;