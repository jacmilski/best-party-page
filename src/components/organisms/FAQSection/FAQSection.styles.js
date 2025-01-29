import styled from "styled-components";

export const StyledFAQSection = styled.div`
    width: 100%;
    background-color: var(--orange);
    padding: ${({
// @ts-ignore
    $isContactPage }) => $isContactPage ? '40px' : 'clamp(34px, 4.444vw, 64px)'};

    @media only screen and (min-width: 954px) {
        min-width: 50%;
        padding-top: ${({
// @ts-ignore
        $isContactPage }) => $isContactPage ? '148px' : 'clamp(34px, 4.444vw, 64px)'};
    }

    @media only screen and (min-width: 1440px) {
        min-width: 55%;
    }
`;

export const StyledFAQElements = styled.div`
    margin-top: clamp(30px, 5.694vw, 82px);
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3.056vw, 44px);
`;