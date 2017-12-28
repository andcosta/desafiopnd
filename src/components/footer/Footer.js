import '../../styles/Footer.css';
import manuh from 'manuh';
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      cont: 0
    };
  }

  sendMessage() {
    manuh.publish('msg/send', {
      value: this.state.msg,
      sender: 'human',
      key: this.state.cont
    });

    this.state.cont++;

    manuh.publish('msg/send', {
      value: 'Olá , estou ouvindo, em que posso ajudá-lo?',
      sender: 'robot',
      key: this.state.cont
    });

    this.setState({ cont: this.state.cont + 1, msg: '' });
  }

  render() {
    return (
      <div className="main-footer">
        <textarea
          className="text-area"
          placeholder="Digite aqui sua mensagem..."
          value={this.state.msg}
          onChange={newValue => {
            this.setState({ msg: newValue.target.value });
          }}
          onKeyPress={event => {
            if (event.key === 'Enter') this.sendMessage();
          }}
        />
        <input
          className="send-button button-start "
          type="submit"
          value="Enviar"
          onClick={() => this.sendMessage()}
        />
      </div>
    );
  }
}

export default Footer;
