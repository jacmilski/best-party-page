import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    StyledImageWrapper,
    StyledList,
    StyledListSection,
    StyledContentWrapper,
    StyledCircleWrapper
} from './listSection.styles';
import { StyledSecondTitle } from '../../../styles/sharedStyles';
import Circle from '../../icons/circle';

const ListSection = ({ image, alt, title, list, id }) => {

    const img = getImage(image);

    return (
        <StyledListSection>
            <StyledCircleWrapper>
                <Circle />
            </StyledCircleWrapper>
            <StyledImageWrapper>
                <GatsbyImage
    // @ts-ignore
                    image={img}
                    alt={alt}
                />
            </StyledImageWrapper>
            <StyledContentWrapper>
                <StyledSecondTitle>
                    {title}
                </StyledSecondTitle>
                <StyledList>
                    {list.map(({element}) => (
                        <li key={id}>{element}</li>
                    ))}
                </StyledList>
            </StyledContentWrapper>
        </StyledListSection>
    )
}

export default ListSection;