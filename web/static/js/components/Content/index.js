import React from 'react';
import Image from './Image';
import Text from './Text';

const mapping = {
  image: Image,
  text: Text,
};

const Content = ({ type, ...content }) => {
  const Component = mapping[type];
  return (
    <Component {...content} />
  );
};

export default Content;
