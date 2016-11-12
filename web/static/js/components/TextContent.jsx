import React, {PropTypes} from 'react';
import { Text, Card, Button } from 'rebass';
import ReactMarkdown from 'react-markdown';

export default class TextContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      description,
      data,
      onDelete,
    } = this.props;
    return (
      <Card style={{margin: '10px', maxWidth: '300px', maxHeight: '300px'}}>
        <ReactMarkdown source={data} />
        <Text>
          {description}
        </Text>
        <Button onClick={onDelete}>
          Delete
        </Button>
      </Card>
    );
  }
}

TextContent.propTypes = {
};
