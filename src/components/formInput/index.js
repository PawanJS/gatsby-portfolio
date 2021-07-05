import React from 'react';
import * as Styled from './styles';

const FormInput = ({ ...props }) => {
  return (
    <label htmlFor={props.id}>
      <Styled.Input {...props} />
    </label>
  );
};

export default FormInput;
