import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../components/atoms/seo/seo";
//import Input from "../components/atoms/Input/input";
//import Button from "../components/atoms/Button/button";
//import Link from "../components/atoms/Link/link";
//import HamburgerButton from "../components/atoms/HamburgerButton/hamburgerButton";
//import FAQElement from "../components/atoms/FAQElement/FAQElement";
import HeroSection from "../components/organisms/heroSection/heroSection";


const IndexPage = ({ data: { datoCmsHomePage} }) => {
    return (
    <main>
      <HeroSection
        title={datoCmsHomePage.mainSectionPageTitle}
        description={datoCmsHomePage.mainSectionPageDescription}
        imageTitle={datoCmsHomePage.mainSectionImage.title}
        alt={datoCmsHomePage.mainSectionImage.alt}
        heroImage={datoCmsHomePage.mainSectionImage.gatsbyImageData} />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Strona główna" description={'Strona główna'} pathname={'/'} children={undefined} />
);

export const query = graphql`
  query HomePageQuery {
      datoCmsHomePage(mainSectionImage: {}) {
        mainSectionPageTitle
        mainSectionPageDescription
        mainSectionImage {
          url
          alt
          title
          gatsbyImageData
        }
      }
    }
`;

{/*       <Input name="name" type="text" label="Imię" error="" />
      <Input name="name" type="email" label="E-mail" error="" />
      <Input name="" type="textarea" label="Wiadomość" error="" />
      <Button text="Wyślij" type="submit" href="" />
      <HamburgerButton
        ariaLabel="Otwórz menu"
        openMenu={() => {
          setIsOpen(!isOpen);
          setIsBlack(!isBlack);
        }}
        isOpen={isOpen}
        isBlack={isBlack}
        children={undefined} />
      <FAQElement question="Czy to jest pytanie?" answer="To jest przeraźliwie długa odpowiedź na pytanie." /> */}
