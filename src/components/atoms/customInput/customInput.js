import React from 'react';
import { 
    StyledInputWrapper,
    StyledLabel,
    StyledError,
    StyledInput,
    StyledTextArea
} from './customInput.styles';

const CustomInput = ({name, type, label, error, register}) => {
  return (
    <StyledInputWrapper>
        {label ? <StyledLabel htmlFor={name}>{label}</StyledLabel> : null}
        {
            (() => {
            switch (type) {
                case 'textarea':
                    return <StyledTextArea id={name} name={name} {...register} />
                default:
                    return <StyledInput id={name} name={name} type={type} {...register} />;
            }
            })()
        }
        {error ? <StyledError>{error}</StyledError> : null}
    </StyledInputWrapper>
  )
}

export default CustomInput;