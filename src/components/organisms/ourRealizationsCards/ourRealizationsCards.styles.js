import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledOurRealizationsCards = styled.section`
    width: 100%;
    margin-top: 148px;
    padding: 0 23px 80px;

    @media only screen and (min-width: 768px) {
        padding: 0 clamp(33px, 9.653vw, 139px) 80px;
    }
`;

export const StyledWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, max(367px, 1fr));
    margin-top: 30px;
    justify-items: center;

    @media only screen and (min-width: 412px) {
        grid-template-columns: repeat(auto-fill, minmax(367px, 1fr));
    }
`;

export const StyledCardLink = styled(Link)`
    text-decoration: none;
    //color: var(--black);
    max-width: 367px;
`;

export const StyledImage = styled.div`
    width: 100%;
    border-radius: 27px 27px 0 0;
    overflow: hidden;

    .gatsby-image-wrapper {
        width: 100%;
    }
`;

export const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 19px 22px 29px;
    background-color: var(--cream);
    border-radius: 0 0 27px 27px;
    overflow: hidden;
`;
export const StyledTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
`;
export const StyledDescription = styled.div`
    color: var(--black);
`;
export const StyledFootnote = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`;
