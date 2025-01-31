import React from 'react';
import Slider from 'react-slick';
import {
    StyledOurRealizationSection,
    StyledSliderWrapper,
} from './ourRealizationSection.styles';
import { StyledSecondTitle } from '../../../styles/sharedStyles';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ourRealizationSectionLabels } from './ourRealizationSection.labels';
import RealizationCard from '../../atoms/realizationCard/realizationCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurRealizationSection = () => {
    const data = useStaticQuery(graphql`
        query RealizationSection {
            allDatoCmsRealization {
                edges {
                    node {
                        thumbnail {
                            alt
                            gatsbyImageData
                            title
                        }
                        thumbnailDescription
                        title
                        id
                    }
                }
            }
        }
    `);
    const {
        allDatoCmsRealization: {
            edges: [{ node }],
        },
    } = data;
    const {
        allDatoCmsRealization: { edges },
    } = data;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                },
            },
        ],
    };

    return (
        <StyledOurRealizationSection>
            <StyledSecondTitle
                // @ts-ignore
                $desktopTextAlign="center"
            >
                {ourRealizationSectionLabels.HEADING}
            </StyledSecondTitle>
            <StyledSliderWrapper>
                <Slider {...settings}>
                    {edges.map(({ node: { thumbnail, title, slug } }) => (
                        <Link key={node.id} to={`/realizacja/${slug}`}>
                            <RealizationCard image={thumbnail} title={title} />
                        </Link>
                    ))}
                </Slider>
            </StyledSliderWrapper>
        </StyledOurRealizationSection>
    );
};

export default OurRealizationSection;
