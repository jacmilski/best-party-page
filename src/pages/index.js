import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/atoms/seo/seo";
import HeroSection from "../components/organisms/heroSection/heroSection";
import YourBestPartySection from "../components/molecules/yourBestPartySection/yourBestPartySection";
import ListSection from "../components/molecules/listSection/listSection";
import OurRealizationSection from "../components/organisms/ourRealizationSection/ourRealizationSection";



const IndexPage = ({ data: { datoCmsHomePage } }) => {
  
    return (
    <main>
      <HeroSection
        title={datoCmsHomePage.mainSectionPageTitle}
        description={datoCmsHomePage.mainSectionPageDescription}
        imageTitle={datoCmsHomePage.mainSectionImage.title}
        alt={datoCmsHomePage.mainSectionImage.alt}
        heroImage={datoCmsHomePage.mainSectionImage.gatsbyImageData}
      />
      <YourBestPartySection
        image={datoCmsHomePage.secondSectionImage.gatsbyImageData}
        alt={datoCmsHomePage.secondSectionImage.alt}
        title={datoCmsHomePage.secondSectionTitle}
        description={datoCmsHomePage.secondSectionDescription}
        />
      <ListSection
          image={datoCmsHomePage.thirdSectionImage.gatsbyImageData}
          alt={datoCmsHomePage.thirdSectionImage.alt}
          title={datoCmsHomePage.thirdSectionTitle}
          list={datoCmsHomePage.list}
      />
      <OurRealizationSection />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
);

export const query = graphql`
  query HomePageQuery {
    datoCmsHomePage {
      mainSectionPageTitle
      mainSectionPageDescription
      mainSectionImage {
        alt
        title
        gatsbyImageData
      }
      secondSectionTitle
      secondSectionDescription
      secondSectionImage {
        gatsbyImageData
        alt
        title
      }
      thirdSectionTitle
      thirdSectionImage {
        gatsbyImageData
        alt
        title
      }
      list {
        element
        id
      }
    }
  }
`;
