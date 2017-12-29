import '../../styles/Container.css';
import pnd from '../../images/pdvendas.png';
import React, { Component } from 'react';
import manuh from 'manuh';

class EntryTalking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  startChat() {
    this.props.startChat(this.state.name);
  }

  render() {
    return (
      <div className="entry-div">
        <img src={pnd} alt="logo" className="logo-pnd" />
        <div className="middle-div">
          <div className="login-dom">
            <p className="login-text"> Chat </p>
          </div>
          <div className="login-dom with-margin">
            <input
              className="input-name"
              type="text"
              placeholder="Insira seu nome..."
              onChange={event => {
                this.props.onChangeName(event.target.value.trim());
                this.setState({ name: event.target.value.trim() });
              }}
            />
            <input
              type="submit"
              value="Iniciar Chat"
              title={
                this.state.name === ''
                  ? 'Necessário preencher nome'
                  : 'Iniciar chat '
              }
              className={
                this.state.name !== '' ? 'button-start' : 'button-disabled'
              }
              onClick={() => {
                if (this.state.name !== '') this.startChat();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EntryTalking;
