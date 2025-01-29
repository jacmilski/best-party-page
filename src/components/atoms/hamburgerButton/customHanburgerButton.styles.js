// @ts-nocheck
import styled from "styled-components";
import { focusVisibleStyles } from "../../../styles/sharedStyles";

export const StyledHamburgerButton = styled.button`
  cursor: pointer;
  border: 0;
  width: 36px;
  height: 34px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;

  ${focusVisibleStyles};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

export const StyledHamburgerInner = styled.span`
  width: 36px;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 2px;
  transition: background-color 250ms linear;
  background-color: ${({ $isOpen, $isBlack }) =>
  $isBlack ? "var(--black)" : $isOpen ? "var(--black)" : "var(--white)"};
  z-index: 1001;

  &::after {
    content: "";
    left: 0;
    width: ${({ $isOpen }) => ($isOpen ? "36px" : "24px")};
    height: 3px;
    position: absolute;
    background-color: ${({ $isOpen, $isBlack }) =>
      $isBlack ? "var(--black)" : $isOpen ? "var(--black)" : "var(--white)"};
    top: 8px;
    border-radius: 3px;
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg) translate(6px, -6px)" : "rotate(0)"};
    transition: transform 250ms linear;
    z-index: 1001;
  }

  &::before {
    content: "";
    left: 0;
    width: 36px;
    height: 3px;
    position: absolute;
    background-color: ${({ $isOpen, $isBlack }) =>
      $isBlack ? "var(--black)" : $isOpen ? "var(--black)" : "var(--white)"};
    top: -8px;
    border-radius: 2px;
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
    transition: transform 250ms linear;
    z-index: 1001;
  }
`;