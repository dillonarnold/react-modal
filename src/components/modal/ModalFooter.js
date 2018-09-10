import React from 'react';
import { func, object } from 'prop-types';

const propTypes = {
  /** Function callback for clicking close button */
  onClose: func.isRequired,
  /** Used for focusing on the button for accessibility */
  closeButtonRef: object.isRequired
};

const ModalFooter = ({ onClose, closeButtonRef }) => {
  return (
    <footer className="footer">
      <button className="footer_close" type="button" onClick={onClose} ref={closeButtonRef}>
        Close
      </button>
    </footer>
  );
};

ModalFooter.propTypes = propTypes;

export default ModalFooter;
