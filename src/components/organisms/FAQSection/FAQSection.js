import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import { StyledFAQSection, StyledFAQElements } from './FAQSection.styles';
import { StyledSecondTitle } from '../../../styles/sharedStyles';
import FAQElement from '../../atoms/FAQElement/FAQElement';

const FAQSection = ({ isContactPage }) => {

    const { datoCmsSekcjaFaq: { questionsAndAnswers, faqSectionTitle  }} = useStaticQuery(graphql`
        query FAQQuery {
            datoCmsSekcjaFaq {
                faqSectionTitle
                questionsAndAnswers {
                    question
                    answer
                    id
                }
            }
        }
    `);

    return (
        <StyledFAQSection
// @ts-ignore
            $isContactPage={isContactPage}
        >
            <StyledSecondTitle style={{ color: 'var(--white)'}}>
                {faqSectionTitle}
            </StyledSecondTitle>
            <StyledFAQElements>
                {questionsAndAnswers.map(({ question, answer, id }) => (
                    <FAQElement
                        key={id}
                        question={question}
                        answer={answer}
                    />
                ))}
            </StyledFAQElements>
        </StyledFAQSection>
    )
}

export default FAQSection;