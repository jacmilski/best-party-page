import React, { useState } from 'react';
import {
    StyledAnswerWrapper,
    StyledFAQElement,
    StyledIconWrapper,
    StyledQuestionWrapper,
} from './FAQElement.styles';
import Arrow from '../../icons/arrow';

const FAQElement = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <StyledFAQElement
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            open={isOpen}
            onClick={handleToggle}
        >
            <StyledQuestionWrapper>
                <StyledIconWrapper>
                    <Arrow />
                </StyledIconWrapper>
                {question}
            </StyledQuestionWrapper>
            <StyledAnswerWrapper
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
            >
                {answer}
            </StyledAnswerWrapper>
        </StyledFAQElement>
    );
};

export default FAQElement;
