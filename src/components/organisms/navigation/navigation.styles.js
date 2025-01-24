import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;
    z-index: 100;
    display: ${({
// @ts-ignore
        $isOpen, $isBlack }) => $isOpen ? 'flex' : 'none' };

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        top: unset;
        left: unset;
        width: auto;
        height: auto;
        z-index: 100;
        background-color: transparent;
    }
`;