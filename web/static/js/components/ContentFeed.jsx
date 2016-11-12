import React, { PropTypes } from 'react';
import { setPropTypes } from 'recompose';
import { Box } from 'react-layout-components';
import ImageContent from './ImageContent';
import TextContent from './TextContent';

const ContentFeed = ({ content, destroyContent }) => (
  <Box row>
    {content.map(({
      description,
      data,
      type,
      id,
    }) => {
      if (type === 'image') {
        return (
          <ImageContent
            key={id}
            description={description}
            data={data}
            onDelete={() => destroyContent(id)}
          />
        );
      }
      return (
        <TextContent
          key={id}
          description={description}
          data={data}
          onDelete={() => destroyContent(id)}
        />
      );
    })}
  </Box>
);

const content = PropTypes.shape({
  description: PropTypes.string,
  data: PropTypes.string,
  type: PropTypes.string,
}).isRequired;

export default setPropTypes({
  content: PropTypes.arrayOf(content),
})(ContentFeed);
