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

const NewContentModal = ({ actions, modal = {} }) => (
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
            rounded
            type="text"
          />
          <Textarea
            label="Data"
            name="data_input"
            placeholder="Enter a description..."
            rounded
            type="text"
          />
        </div>
        <PanelFooter>
          <Box flex={2}>
            <Button>
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

const module = createModule({
  name: 'modal',
  initialState: { open: false },
  transformations: {
    open: state => ({ ... state, open: true }),
    close: state => ({ ... state, open: false }),
  },
});

export default compose(
  localModule(module),
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
