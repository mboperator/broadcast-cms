import React from 'react';
import { Box } from 'react-layout-components';
import ipfsInterface from '../decorators/ipfsInterface';
import Dropzone from 'react-dropzone';

class ImageInput extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    const { onChange, ipfs } = this.props;

    ipfs.uploadFile(acceptedFiles[0]);
  }

  componentWillReceiveProps(nextProps) {
    const { uploadedFiles } = nextProps.ipfs;
    if (uploadedFiles.length && uploadedFiles[0].hash !== this.props.value) {
      this.props.onChange(uploadedFiles[0].hash);
    }
  }

  render() {
    const { value, onChange, ipfs } = this.props;
    return (
      <Box>
        Images go here !
        <Dropzone onDrop={this.onDrop}>
        </Dropzone>
      </Box>
    );
  }
}

export default ipfsInterface(ImageInput);
