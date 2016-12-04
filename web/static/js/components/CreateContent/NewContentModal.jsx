import React, { PropTypes } from 'react';
import { createModule } from 'redux-modules';
import localModule from '../../utils/localModule';
import { compose, setPropTypes } from 'recompose';
import { Box } from 'react-layout-components';
import MarkdownInput from './MarkdownInput';
import ImageInput from './ImageInput';

import {
  Button,
  ButtonCircle,
  Panel,
  PanelHeader,
  Overlay,
  Input,
  PanelFooter,
} from 'rebass';

const inputForContentType = type => {
  switch (type) {
  case 'image':
    return ImageInput;
  case 'video':
    return MarkdownInput;
  case 'text':
    return MarkdownInput;
  default:
    break;
  }
};

const NewContentModal = ({ actions, modal = {}, createContent }) => {
  const InputComponent = inputForContentType(modal.type);

  return (
    <div>
      <ButtonCircle onClick={actions.open}>
        Add
      </ButtonCircle>
      <Overlay
        open={modal.open}
        onDismiss={actions.close}
      >
        <Panel>
          <PanelHeader>
            Add Content
          </PanelHeader>
          <div>
            <Box>
              <Box>
                <div
                  onClick={() => actions.updateType('image')}
                  style={{ padding: '10px' }}
                >
                  Image
                </div>
                <div
                  onClick={() => actions.updateType('text')}
                  style={{ padding: '10px' }}
                >
                  Text
                </div>
                <div
                  onClick={() => actions.updateType('video')}
                  style={{ padding: '10px' }}
                >
                  Video
                </div>
              </Box>
            </Box>
            <Box column>
              <Input
                label="Description"
                name="description_input"
                placeholder="Enter a description..."
                onChange={({ target: { value } }) => {
                  actions.updateDescription(value);
                }}
                value={modal.description}
                rounded
                type="text"
              />
              <InputComponent
                value={modal.data}
                onChange={actions.updateData}
              />
            </Box>
          </div>
          <PanelFooter>
            <Box flex={2}>
              <Button onClick={() => createContent({ ...modal })}>
                Submit
              </Button>
            </Box>
            <Box flex={4}>
              <a href="#" onClick={actions.close}>
                Cancel
              </a>
            </Box>
          </PanelFooter>
        </Panel>
      </Overlay>
    </div>
  );
};

const modalModule = createModule({
  name: 'modal',
  initialState: {
    open: false,
    description: '',
    data: '',
    type: 'image',
    activePane: 'image',
  },
  transformations: {
    open: state => ({ ... state, open: true }),
    updateData: (state, { payload: data }) => ({ ... state, data }),
    updateDescription: (state, { payload: description }) => ({ ... state, description }),
    updateType: (state, { payload: type }) => ({ ... state, type }),
    close: () => ({data: '', description: '', type: 'image', open: false}),
  },
});

export default compose(
  localModule(modalModule),
  setPropTypes({
    actions: PropTypes.shape({
      open: PropTypes.func.isRequired,
      close: PropTypes.func.isRequired,
    }),
    modal: PropTypes.shape({
      open: PropTypes.bool,
    }),
  })
)(NewContentModal);
