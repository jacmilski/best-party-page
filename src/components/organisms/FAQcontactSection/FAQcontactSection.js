import React from 'react';
import Contact from '../contact/contact';
import FAQSection from '../FAQSection/FAQSection';
import { StyledCircleWrapper, StyledFAQContactSection } from './FAQContactSection.styles';
import DoubbleCircle from '../../icons/doubbleCircle';

const FAQContactSection = ({ isContactPage }) => {
  return (
    <StyledFAQContactSection
// @ts-ignore
    $isContactPage={isContactPage}>
      <StyledCircleWrapper>
        <DoubbleCircle />
      </StyledCircleWrapper>
      <Contact
// @ts-ignore
        isContactPage={isContactPage} 
      />
      <FAQSection
// @ts-ignore
        isContactPage={isContactPage}
      />
    </StyledFAQContactSection>
  )
}

export default FAQContactSection;