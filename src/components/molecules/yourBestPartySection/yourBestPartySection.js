import React from 'react';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { StyledDescription, StyledTextWrapper, StyledYourBestPartySection } from './yourBestPartySection.styles';
import { StyledImageWrapper } from './yourBestPartySection.styles';
import Button from '../../atoms/button/button';
import { StyledSecondTitle } from '../../../styles/sharedStyles';

const YourBestPartySection = ({ image, alt, title, description }) => {

    const img = getImage(image);

    return (
        <StyledYourBestPartySection>
            <StyledTextWrapper>
                <StyledSecondTitle
                    // @ts-ignore
                    $mobileTextAlign={'center'}
                >
                    {title}
                </StyledSecondTitle>
                <StyledDescription>
                    {description}
                </StyledDescription>
                <Button
                    text={'KONTAKT'}
                    type={'button'}
                    href={'/kontakt'} 
                />
            </StyledTextWrapper>
            <StyledImageWrapper>
                <GatsbyImage
// @ts-ignore
                    image={img}
                    alt={alt}
                />
            </StyledImageWrapper>
        </StyledYourBestPartySection>
    )
}

export default YourBestPartySection;