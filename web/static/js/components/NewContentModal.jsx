import React, { PropTypes } from 'react';
import { createModule, connectModule } from 'redux-modules';
import { ButtonCircle, Panel, PanelHeader, Overlay } from 'rebass';
import { compose, withReducer, setPropTypes } from 'recompose';

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
  withReducer(
    'modal',
    'dispatch',
    module.reducer,
    { open: true },
  ),
  connectModule(module),
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
