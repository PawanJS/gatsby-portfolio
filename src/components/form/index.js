import React from 'react';
import * as Styled from './styles';

const Form = ({ children, ...props }) => {
  return (
    <Styled.Form {...props}>
      {children}
      <Styled.Feedback className="feedback" />
    </Styled.Form>
  );
};

export default Form;
