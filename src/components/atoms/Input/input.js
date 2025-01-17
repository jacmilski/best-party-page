import React from 'react';
import { 
    StyledInputWrapper,
    StyledLabel,
    StyledError,
    StyledInput,
    StyledTextArea
} from './input.styles';

const Input = ({name, type, label, error}) => {
  return (
    <StyledInputWrapper>
        {label ? <StyledLabel htmlFor={name}>{label}</StyledLabel> : null}
        {
            (() => {
            switch (type) {
                case 'textarea':
                    return <StyledTextArea id={name} name={name} />
                default:
                    return <StyledInput id={name} name={name} type={type} />;
            }
            })()
        }
        {error ? <StyledError>{error}</StyledError> : null}
    </StyledInputWrapper>
  )
}

export default Input;