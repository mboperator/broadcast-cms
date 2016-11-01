import React, { PropTypes } from 'react';
import { createModule } from 'redux-modules';
import localModule from '../utils/localModule';
import { compose, setPropTypes } from 'recompose';
import { Box } from 'react-layout-components';

import {
  Button,
  ButtonCircle,
  Panel,
  PanelHeader,
  Overlay,
  Input,
  Textarea,
  PanelFooter,
} from 'rebass';

const NewContentModal = ({ actions, modal = {}, createContent }) => (
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
          <Textarea
            label="Data"
            name="data_input"
            placeholder="Enter data..."
            onChange={({ target: { value } }) => {
              actions.updateData(value);
            }}
            rounded
            type="text"
          />
          <Input
            label="Type"
            name="type_input"
            placeholder="image, video, not"
            onChange={({ target: { value } }) => {
              actions.updateType(value);
            }}
            rounded
            type="text"
          />
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

const modalModule = createModule({
  name: 'modal',
  initialState: { open: false, description: '', data: '', type: '' },
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
