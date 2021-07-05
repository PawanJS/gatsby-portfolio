import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Button = ({ primary, block, children, ...otherProps }) => (
  <Styled.Button
    primary={primary}
    block={block}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...otherProps}
  >
    {children}
  </Styled.Button>
);

Button.propTypes = {
  primary: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.any.isRequired
};

export default Button;
