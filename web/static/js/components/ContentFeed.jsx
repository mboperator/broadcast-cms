import React, { PropTypes } from 'react';
import { Text, Card, CardImage, Button } from 'rebass';
import { setPropTypes } from 'recompose';
import ReactMarkdown from 'react-markdown';
import { Box } from 'react-layout-components';
const ContentFeed = ({ content, destroyContent }) => (
  <Box row>
    {content.map(({
      description,
      data,
      type,
      id,
    }) => (
      <Card key={id} style={{margin: '10px', maxWidth: '300px', maxHeight: '300px'}}>
        {type === 'image' &&
          [
            <CardImage src={data} />,
            <Text>
              {description}
            </Text>,
          ]
        }
        {type === 'text' &&
          [
            <ReactMarkdown source={data} />,
            <Text>
              {description}
            </Text>,
          ]
        }
        <Button onClick={() => destroyContent(id)}>
          Delete
        </Button>
      </Card>
    ))}
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
