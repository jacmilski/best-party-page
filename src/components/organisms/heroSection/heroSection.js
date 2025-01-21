import React from 'react';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { StyledContentWrapper, StyledDescription, StyledHeroSection, StyledImageWrapper, StyledTitle } from './heroSection.styles';

const HeroSection = ({ title, description, alt, imageTitle, heroImage }) => {

    const image = getImage(heroImage);


    return (
    <StyledHeroSection>
        <StyledImageWrapper>
            <GatsbyImage 
                    // @ts-ignore
                alt={alt} title={imageTitle} image={image} />
        </StyledImageWrapper>
        <StyledContentWrapper>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledDescription>
                {description}
            </StyledDescription>
        </StyledContentWrapper>
    </StyledHeroSection>
)};

export default HeroSection;