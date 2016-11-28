import React, { PropTypes } from 'react';
import { setPropTypes } from 'recompose';
import { Box } from 'react-layout-components';
import ContentFeed from './ContentFeed';

const PageFeed = ({ pages = [], destroyPage }) => (
  <Box
    column
    alignItems="center"
    style={{ overflowY: 'scroll', width: '100%' }}
    >
    {pages.map(({
      contents,
      subtitle,
      title,
      id,
    }) =>
      <Box
        key={id}
        column
        alignItems="center"
        justifyContent="center"
        style={{
          border: '1px solid black',
          margin: '20px',
          minWidth: '480px',
          minHeight: '300px',
          width: '800px',
          height: '500px',
        }}
      >
        <Box column>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Box>
      </Box>
    )}
  </Box>
);

const page = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
}).isRequired;

export default setPropTypes({
  pages: PropTypes.arrayOf(page),
})(PageFeed);
