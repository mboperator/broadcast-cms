import React from 'react';
import IPFS from 'ipfs-api';

const ipfsInterface = Component => {
  return class IPFSClient extends React.Component {
    state = {
      loading: false,
      errors: null,
      downloadedFiles: {},
    }

    constructor(props) {
      super(props);
      this.adapter = IPFS({
        host: 'localhost',
        port: '5001',
        protocol: 'http',
      });
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
            downloadFile: this.handleDownload,
            downloadedFiles: this.state.downloadedFiles,
            downloadErrors: this.state.errors,
            loading: this.state.loading,
          }}
        />
      );
    }

  };
};

export default ipfsInterface;
