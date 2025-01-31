import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 35px 0 0;
    background-color: var(--dark-gray);
`;
export const StyledHeading = styled.h2`
    font-size: clamp(32px, 2.778vw, 40px);
    font-weight: bolder;
    color: var(--white);
    padding: 0 23px;

    @media only screen and (min-width: 768px) {
        padding: 0 44px;
    }
`;
export const StyledLinks = styled.div`
    display: flex;
    gap: 31px;
    margin-top: 62px;
    padding: 0 23px;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 49px;
        padding: 0 44px;
        gap: 44px;
    }
`;
export const StyledBottomWrapper = styled.div`
    width: 100%;
    height: 46px;
    margin-top: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 23px;
    color: var(--white);
    background-color: var(--red);

    p {
        font-size: 14px;
        margin-right: 7px;
    }

    @media only screen and (min-width: 768px) {
        padding: 0 44px;
        margin-top: 72px;
    }
`;
