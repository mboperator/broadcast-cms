import React from 'react';
import IPFS from 'ipfs-api';

/*
Ideally this component would provide an Observable
to the component it's wrapping
 */

const ipfsInterface = Component => {
  return class IPFSClient extends React.Component {
    state = {
      loading: false,
      errors: null,
      uploadedFiles: [],
    }

    constructor(props) {
      super(props);
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

    render() {
      return (
        <Component
          {...this.props}
          ipfs={{
            uploadFile: this.handleUpload,
            uploadedFiles: this.state.uploadedFiles,
            uploadErrors: this.state.errors,
            loading: this.state.loading,
          }}
        />
      );
    }

  };
};

export default ipfsInterface;
