import React from 'react';
import { graphql } from 'gatsby';
import {
    StyledTextWrapper,
    StyledContentWrapper,
    StyledImageWrapper,
    StyledRealizationTemplate,
} from './realizationTemplate.styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import CustomButton from '../../atoms/button/customButton';
import { realizationLabels } from './realizationTemplate.labels';
import { StyledSecondTitle } from '../../../styles/sharedStyles';

const RealizationTemplate = ({ data: { datoCmsRealization } }) => (
    <StyledRealizationTemplate>
        <StyledTextWrapper>
            <StyledSecondTitle>{datoCmsRealization.title}</StyledSecondTitle>
            <StyledContentWrapper>
                {datoCmsRealization.descriptionForRealizationPage}
            </StyledContentWrapper>
            <CustomButton
                text={realizationLabels.contact}
                type={'button'}
                href={'/kontakt'}
            />
        </StyledTextWrapper>
        <StyledImageWrapper>
            <GatsbyImage
                // @ts-ignore
                image={getImage(
                    datoCmsRealization.bigImageForRealizationPage
                        .gatsbyImageData
                )}
                alt={datoCmsRealization.bigImageForRealizationPage.alt}
                style={{ height: '100%', objectFit: 'cover', width: '100%' }}
            />
        </StyledImageWrapper>
    </StyledRealizationTemplate>
);

export default RealizationTemplate;

export const query = graphql`
    query RealizationQuery($realizationId: String!) {
        datoCmsRealization(id: { eq: $realizationId }) {
            id
            slug
            bigImageForRealizationPage {
                alt
                gatsbyImageData
            }
            title
            descriptionForRealizationPage
            cattering
            numberOfPersons
        }
    }
`;
