import React, { useState, useEffect } from 'react';

import Icon from '../../../assets/images/scrollBtnIcon.svg';

import * as Styled from './styles';

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    show && (
      <Styled.Button onClick={handleClick} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
        <img src={Icon} alt="ScrollToTop" />
      </Styled.Button>
    )
  );
};

export default ScrollToTop;
