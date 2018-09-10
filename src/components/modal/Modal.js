import React, {Component} from 'react';
import {bool, func} from 'prop-types';
import ModalFooter from './ModalFooter';

/**
 * A popup modal component.
 */
class Modal extends Component {

  static propTypes = {
    /** Opens the modal. */
    isShown: bool,
    /** Called when the modal is closed by clicking on the backdrop, closing button, or pressing ESC. */
    onClose: func,
  };

  static defaultProps = {
    isShown: false,
    onClose: () => {}
  };

  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.closeButtonRef = React.createRef();
  }

  componentDidMount() {
    this.props.isShown && this.open();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isShown !== this.props.isShown) {
      this.props.isShown ? this.open() : this.close();
    }
  }

  componentWillUnmount() {
    this.close();
  }

  // Handle opening of modal
  open() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.modalRef.current.classList.remove('modal--hide');
    this.modalRef.current.classList.add('modal--display');
    // Focus on first button for accessibility
    this.closeButtonRef.current.focus();
  }

  // Handle closing of modal
  close() {
    document.removeEventListener('keydown', this.handleKeyDown);
    this.modalRef.current.classList.remove('modal--display');
    this.modalRef.current.classList.add('modal--hide');
    this.props.onClose();
  }

  handleKeyDown = e => {
    (e.key === 'Escape' || e.keyCode === 27) && this.close();
  };

  handleBackgroundClick = e => {
    // Prevent event bubbling
    if (e.target === this.modalRef.current) {
      this.close();
    }
  };

  render() {
    const {children} = this.props;

    return (
      <div className="modal-background modal--hide" ref={this.modalRef} onClick={this.handleBackgroundClick}>
        <div className="modal" role="dialog">
          <div className="content">
            {children}
          </div>
          <ModalFooter onClose={() => this.close()} closeButtonRef={this.closeButtonRef}/>
        </div>
      </div>
    );
  };
}

export default Modal;
