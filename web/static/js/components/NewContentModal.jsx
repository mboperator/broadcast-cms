import React, { PropTypes } from 'react';
import { createModule } from 'redux-modules';
import localModule from '../utils/localModule';
import { ButtonCircle, Panel, PanelHeader, Overlay } from 'rebass';
import { compose, setPropTypes } from 'recompose';

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
      </Panel>
    </Overlay>
  </div>
);

const module = createModule({
  name: 'modal',
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
