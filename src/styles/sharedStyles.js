import styled, { css } from "styled-components";

export const focusVisibleStyles = css`
    &:focus-visible {
        outline: none;
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--orange);
        outline-offset: 3px;
    }
`;

export const StyledSecondTitle = styled.h2`
    font-size: clamp(32px, 2.5vw,48px);
    ${focusVisibleStyles}
    text-align: ${
    ({
// @ts-ignore
        $mobileTextAlign }) => $mobileTextAlign ?? "left"};
    
    @media only screen and (min-width: 768px) {
        text-align: ${({
// @ts-ignore
        $mobileTextAlign, $desktopTextAlign }) => $desktopTextAlign
        ? $desktopTextAlign
        : $mobileTextAlign ?? "left"};
    }
`;

export const StyledGlobalWrapper = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
`;