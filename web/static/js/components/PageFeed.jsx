import React, { PropTypes } from 'react';
import { setPropTypes } from 'recompose';
import { Box } from 'react-layout-components';
import ContentFeed from './ContentFeed';

const PageFeed = ({ pages = [], destroyPage }) => (
  <Box column>
    {pages.map(({
      contents,
      subtitle,
      title,
      id,
    }) =>
      <Box
        key={id}
        column
        style={{
          border: '1px solid black',
          margin: '20px',
          minWidth: '300px',
          minHeight: '250px',
          alignItems: 'center',
        }}
      >
        <Box column>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Box>
        <ContentFeed content={contents} />
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
