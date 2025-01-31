import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledCardLink,
    StyledContentWrapper,
    StyledDescription,
    StyledFootnote,
    StyledImage,
    StyledOurRealizationsCards,
    StyledTitle,
    StyledWrapper,
} from './ourRealizationsCards.styles';
import { StyledSecondTitle } from '../../../styles/sharedStyles';
import { ourRealizationsLabels } from './ourRealizationsCards.labels';
import { GatsbyImage } from 'gatsby-plugin-image';

const OurRealizationsCards = () => {
    const {
        allDatoCmsRealization: { edges },
    } = useStaticQuery(graphql`
        query AllRealizationsQuery {
            allDatoCmsRealization {
                edges {
                    node {
                        thumbnail {
                            gatsbyImageData
                            alt
                        }
                        thumbnailDescription
                        title
                        descriptionForRealizationPage
                        cattering
                        numberOfPersons
                        id
                        slug
                    }
                }
            }
        }
    `);

    return (
        <StyledOurRealizationsCards>
            <StyledSecondTitle>{ourRealizationsLabels.title}</StyledSecondTitle>
            <StyledWrapper>
                {edges.map(
                    ({
                        node: {
                            thumbnail,
                            thumbnailDescription,
                            title,
                            cattering,
                            numberOfPersons,
                            id,
                            slug,
                        },
                    }) => (
                        <StyledCardLink key={id} to={`/realizacja/${slug}`}>
                            <StyledImage>
                                <GatsbyImage
                                    image={thumbnail.gatsbyImageData}
                                    alt={thumbnail.alt}
                                />
                            </StyledImage>
                            <StyledContentWrapper>
                                <StyledTitle>{title}</StyledTitle>
                                <StyledDescription>
                                    {thumbnailDescription}
                                </StyledDescription>
                                <StyledFootnote>
                                    <p>
                                        <span>
                                            {ourRealizationsLabels.cattering}:
                                        </span>
                                        <span
                                            style={{
                                                color: 'var(--green)',
                                                marginLeft: '7px',
                                            }}
                                        >
                                            {cattering
                                                ? ourRealizationsLabels.yes
                                                : ourRealizationsLabels.no}
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            {ourRealizationsLabels.count}:
                                        </span>
                                        <span
                                            style={{
                                                color: 'var(--green)',
                                                marginLeft: '7px',
                                            }}
                                        >
                                            {numberOfPersons}
                                        </span>
                                    </p>
                                </StyledFootnote>
                            </StyledContentWrapper>
                        </StyledCardLink>
                    )
                )}
            </StyledWrapper>
        </StyledOurRealizationsCards>
    );
};

export default OurRealizationsCards;
