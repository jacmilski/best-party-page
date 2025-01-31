import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 100%;
    height: 100vh;
    background-color: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? 'var(--white)' : 'transparent')};
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;
    z-index: 1000;
    overflow: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? 'hidden' : 'auto')};
    display: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? 'flex' : 'none')};

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
