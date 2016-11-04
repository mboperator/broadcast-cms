import React, { PropTypes } from 'react';
import { Text, Card, CardImage, Button } from 'rebass';
import { setPropTypes } from 'recompose';
import ReactMarkdown from 'react-markdown';
const ContentFeed = ({ content, destroyContent }) => (
  <div>
    {content.map(({
      description,
      data,
      type,
      id,
    }) => (
      <Card key={id}>
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
  </div>
);

const content = PropTypes.shape({
  description: PropTypes.string,
  data: PropTypes.string,
  type: PropTypes.string,
}).isRequired;

export default setPropTypes({
  content: PropTypes.arrayOf(content),
})(ContentFeed);
