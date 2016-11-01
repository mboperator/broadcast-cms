import React, { PropTypes } from 'react';
import { Text, Card, CardImage, Button } from 'rebass';
import { setPropTypes } from 'recompose';

const ContentFeed = ({ content, destroyContent }) => (
  <div>
    {content.map(({
      description,
      data,
      id,
    }) => (
      <Card key={id}>
        <CardImage src={data} />
        <Text>
          {description}
        </Text>
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
