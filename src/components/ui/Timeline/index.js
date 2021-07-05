import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import * as Styled from './styles';

const Timeline = ({ title, subtitle, content, startDate, endDate, link }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Details>
    <Styled.Content>
      {content}
      {link && (
        <a href={link} rel="noreferrer noopener" target="_blank">
          <Styled.BtnWrapper>
            <Button primary>SEE LIVE</Button>
          </Styled.BtnWrapper>
        </a>
      )}
    </Styled.Content>
  </Styled.Timeline>
);

Timeline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Timeline;
