import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledFooter, StyledHeading, StyledBottomWrapper, StyledLinks } from './footer.styles';
import { footerLabels } from './footer.labels';
import CustomLink from '../../atoms/link/customLink';

const Footer = () => {

    const {datoCmsFooter: {footerInfo}} = useStaticQuery(graphql`
        query FooterQuery {
                datoCmsFooter {
                footerInfo
            }
        }
    `);

    return (
        <StyledFooter>
            <StyledHeading>
                {footerLabels.logo}
            </StyledHeading>
            <StyledLinks>
                <CustomLink url={'/kontakt'} ariaLabel={undefined} className={undefined}>
                    {footerLabels.contact}
                </CustomLink>
                <CustomLink url={'/kontakt'} ariaLabel={undefined} className={undefined}>
                    {footerLabels.realizations}
                </CustomLink>
            </StyledLinks>
            <StyledBottomWrapper>
                <p>
                    {footerInfo}
                </p>
                {new Date().getFullYear()}
            </StyledBottomWrapper>
        </StyledFooter>
    )
}

export default Footer;