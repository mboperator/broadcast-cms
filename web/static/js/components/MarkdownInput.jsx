import React from 'react';
import { Textarea } from 'rebass';
import ReactMarkdown from 'react-markdown';
import { Box, Container } from 'react-layout-components';

const MarkdownInput = ({ value, onChange }) => (
  <Box width={400}>
    <Container flex={2} paddingRight={5}>
      <Textarea
        label="Data"
        name="data_input"
        placeholder="Enter data..."
        onChange={({ target }) => {
          onChange(target.value);
        }}
        value={value}
        rounded
        type="text"
      />
    </Container>
    <Container flex={2} paddingLeft={5}>
      <ReactMarkdown source={value} />
    </Container>
  </Box>
);

export default MarkdownInput;
