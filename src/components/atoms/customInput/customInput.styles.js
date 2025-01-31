import styled, { css } from 'styled-components';
import { focusVisibleStyles } from '../../../styles/sharedStyles';

const inputStyles = css`
    border: 2px solid var(--black);
    width: 100%;
    border-radius: 21px;
    margin-bottom: 16px;
    ${focusVisibleStyles};
`;

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
`;

export const StyledLabel = styled.label`
    color: var(--black);
    font-size: 20px;
    cursor: pointer;
`;

export const StyledError = styled.p`
    color: var(--red);
    text-align: center;
    width: 100%;
    font-size: 20px;
`;

export const StyledTextArea = styled.textarea`
    ${inputStyles}
    resize: none;
    height: 296px;
    padding: 22px;
`;

export const StyledInput = styled.input`
    ${inputStyles}
    height: 50px;
    padding: 0 22px;
`;
