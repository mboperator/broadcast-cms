import React from 'react';
import { Box } from 'react-layout-components';
import ipfsInterface from '../decorators/ipfsInterface';

const ImageInput = ({ value, onChange, ipfs }) => (
  <Box>
    Hello
  </Box>
);

export default ipfsInterface(ImageInput);
