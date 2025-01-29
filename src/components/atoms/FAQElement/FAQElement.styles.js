import styled from 'styled-components';

export const StyledFAQElement = styled.details`
    width: 100%;
    cursor: pointer;

    & svg {
        transform: rotateZ(-90deg);
        transition: transform 250ms linear;
        color: var(--green);
    }

    &[open] {
        svg {
            transform: rotateZ(0deg);
            transition: transform 250ms linear;
        }
    }
`;
export const StyledQuestionWrapper = styled.summary`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: var(--white);
    font-size: clamp(20px, 2.222vw, 32px);

`;
export const StyledAnswerWrapper = styled.div`
    margin-top: 14px;
    margin-left: 34px;
    font-size: clamp(16px, 1.389vw, 20px);
    color: var(--white);
`;
export const StyledIconWrapper = styled.div``;