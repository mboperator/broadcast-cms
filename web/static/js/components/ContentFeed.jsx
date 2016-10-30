import React, { PropTypes } from 'react';
import { Text, Card, CardImage } from 'rebass';
import { setPropTypes } from 'recompose';

const ContentFeed = ({ content }) => (
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
