import React, { PropTypes } from 'react';
import Content from '../Content';

const View = ({ page = {} }) => (
  <div>
    <h1>{page.title}</h1>
    <h3>{page.subtitle}</h3>
    {page.contents && page.contents.map(content => (
      <Content key={content.id} {...content} />
    ))}
  </div>
);

View.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.array,
};

export default View
