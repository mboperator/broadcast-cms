import React, {PropTypes} from 'react';
import { Text, Card, CardImage, Button } from 'rebass';
import ipfsDownloader from '../../decorators/ipfsDownloader';

class ImageContent extends React.Component {
  constructor(props) {
    super(props);
    this.props.ipfs.downloadFile(this.props.data);
  }

  getData() {
    const { ipfs, data } = this.props;
    const loadedData = ipfs.downloadedFiles[data];
    if (loadedData) {
      return <CardImage src={loadedData.toString('utf8')} />
    }
    return null;
  }

  render() {
    const {
      description,
      data,
      onDelete,
    } = this.props;
    return (
      <Card style={{margin: '10px', maxWidth: '300px', maxHeight: '300px'}}>
        <span>{this.getData()}</span>
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

ImageContent.propTypes = {
};

export default ipfsDownloader(ImageContent);
