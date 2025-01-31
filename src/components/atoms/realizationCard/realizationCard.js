import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    StyledImageWrapper,
    StyledRealizationCard,
    StyledTitle,
    StyledTitleWrapper,
} from './realizationCard.styles';

const RealizationCard = ({ image, title }) => {
    const img = getImage(image.gatsbyImageData);

    return (
        <StyledRealizationCard>
            <StyledImageWrapper>
                <GatsbyImage
                    // @ts-ignore
                    image={img}
                    alt={image.alt}
                    objectFit="fill"
                />
            </StyledImageWrapper>
            <StyledTitleWrapper>
                <StyledTitle>{title}</StyledTitle>
            </StyledTitleWrapper>
        </StyledRealizationCard>
    );
};

export default RealizationCard;
