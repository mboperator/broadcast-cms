import React from 'react';
import IPFS from 'ipfs-api';

const ipfsInterface = Component => {
  return class IPFSClient extends React.Component {
    state = {
      loading: false,
      errors: null,
      uploadedFiles: [],
      downloadedFiles: {},
    }

    constructor() {
      super();
      this.adapter = IPFS({
        host: 'localhost',
        port: '5001',
        protocol: 'http',
      });

      this.reader = new FileReader();
      this.reader.onload = this.uploadToIPFS;
    }

    uploadToIPFS = ({ srcElement: { result }}) => {
      this.setState({ loading: true });
      const file = new Buffer(result);

      this.adapter.add(file, (err, res) => {
        if (err || !res) {
          this.setState({ errors: err });
        }

        this.setState({
          uploadedFiles: res,
          loading: false,
        });
      });
    }

    handleUpload = file => {
      this.reader.readAsDataURL(file);
    }

    handleDownload = hash => {
      this.setState({ loading: true });
      this.adapter.cat(hash, {buffer: true}, (err, res) => {
        if (err || !res) {
          this.setState({ errors: err });
        }
        if (res.readable) {
          console.error('unhandled: cat result is a pipe', res);
        }
        else {
          this.setState({
            downloadedFiles: {
              ... this.state.downloadedFiles,
              [hash]: res,
            },
          });
        }
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          ipfs={{
            uploadFile: this.handleUpload,
            downloadFile: this.handleDownload,
            uploadedFiles: this.state.uploadedFiles,
            downloadedFiles: this.state.downloadedFiles,
            uploadErrors: this.state.errors,
            loading: this.state.loading,
          }}
        />
      );
    }

  };
};

export default ipfsInterface;
