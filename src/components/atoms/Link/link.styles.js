import styled from "styled-components";
import { Link } from "gatsby";
import { focusVisibleStyles } from "../../../styles/sharedStyles";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    font-size: 20px;
    transition: color 250ms linear;
    cursor: pointer;

    
    &.color--black {
        color: var(--black);
        
        @media only screen and (max-width: 768px) {
            color: var(--white);
        }
    }
    
    &.color--always-black {
        color: var(--black);
    }
    
    &:hover {
        color: var(--red);
    }

    ${focusVisibleStyles};
`;