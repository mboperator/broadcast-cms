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
      this.adapter = IPFS();
    }

    handleUpload = file => {
      this.setState({ loading: true });

      this.adapter.add(new Buffer(file), (err, res) => {
        if (err || !res) {
          this.setState({ errors: err });
        }

        res.forEach(uploaded => {
          this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploaded),
            loading: false,
          });
        });
      });
    }

    handleDownload = hash => {
      this.adapter.cat(hash, (err, res) => {
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
