import React, { PropTypes } from 'react';

const View = ({ page = {} }) => (
  <div>
    <h1>{page.title}</h1>
    <h3>{page.subtitle}</h3>
  </div>
);

View.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.array,
};

export default View
