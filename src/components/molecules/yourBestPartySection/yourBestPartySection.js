import React from 'react';
import CustomButton from '../../atoms/button/customButton';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { StyledDescription, StyledTextWrapper, StyledYourBestPartySection } from './yourBestPartySection.styles';
import { StyledImageWrapper } from './yourBestPartySection.styles';
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
                <CustomButton
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