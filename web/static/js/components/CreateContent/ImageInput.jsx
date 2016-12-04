import React, { PropTypes } from 'react';
import { Box } from 'react-layout-components';
import Dropzone from 'react-dropzone';
import ipfsUploader from '../../decorators/ipfsUploader';

class ImageInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    ipfs: PropTypes.shape({
      uploadFile: PropTypes.func,
      uploadedFiles: PropTypes.array,
      loading: PropTypes.bool,
    }),
  };

  componentWillReceiveProps(nextProps) {
    const { uploadedFiles } = nextProps.ipfs;
    if (uploadedFiles.length && uploadedFiles[0].hash !== this.props.value) {
      this.props.onChange(uploadedFiles[0].hash);
    }
  }

  onDrop = (acceptedFiles) => {
    const { ipfs } = this.props;
    ipfs.uploadFile(acceptedFiles[0]);
  }

  render() {
    return (
      <Box>
        <Dropzone onDrop={this.onDrop}>
        </Dropzone>
      </Box>
    );
  }
}

export default ipfsUploader(ImageInput);
