import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const TitleSection = ({ center, title, subtitle, mainTitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
    {mainTitle ? (
      <Styled.MainTitle center={center}>{subtitle}</Styled.MainTitle>
    ) : (
      <Styled.Title center={center}>{subtitle}</Styled.Title>
    )}
    <Styled.Separator center={center} />
  </Styled.TitleSection>
);

TitleSection.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitleSection;
