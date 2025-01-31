import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledFooter,
    StyledHeading,
    StyledBottomWrapper,
    StyledLinks,
} from './footer.styles';
import { footerLabels } from './footer.labels';
import CustomLink from '../../atoms/link/customLink';

const Footer = () => {
    const {
        datoCmsFooter: { footerInfo },
    } = useStaticQuery(graphql`
        query FooterQuery {
            datoCmsFooter {
                footerInfo
            }
        }
    `);

    return (
        <StyledFooter>
            <StyledHeading>{footerLabels.logo}</StyledHeading>
            <StyledLinks>
                <CustomLink
                    // @ts-ignore
                    url={'/kontakt'}
                    ariaLabel={undefined}
                    className={undefined}
                    children={undefined}
                    onClick={undefined}
                >
                    {footerLabels.contact}
                </CustomLink>
                <CustomLink
                    // @ts-ignore
                    CustomLink
                    url={'/kontakt'}
                    ariaLabel={undefined}
                    className={undefined}
                >
                    {footerLabels.realizations}
                </CustomLink>
            </StyledLinks>
            <StyledBottomWrapper>
                <p>{footerInfo}</p>
                {new Date().getFullYear()}
            </StyledBottomWrapper>
        </StyledFooter>
    );
};

export default Footer;
