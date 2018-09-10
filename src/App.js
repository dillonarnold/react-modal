import React, { Component } from 'react';
import { Modal } from './components/modal';
import './App.css';

class App extends Component {
  state = {
    open: false
  };

  // Opens the modal
  handleOpen = () => {
    this.setState({ open: true });
  };

  // Closes the modal
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <Modal isShown={open} onClose={() => this.handleClose()}>
          <p>Some test content.</p>
        </Modal>
        <button onClick={() => this.handleOpen()} style={{marginTop: '20px'}}>Open</button>
      </div>
    );
  }
}

export default App;
