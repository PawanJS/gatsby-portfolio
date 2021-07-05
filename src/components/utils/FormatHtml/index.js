import React from 'react';
import PropTypes from 'prop-types';

const FormatHtml = ({ content, className }) => (
  <span
    className={className}
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

FormatHtml.propTypes = {
  content: PropTypes.any.isRequired
};

export default FormatHtml;
