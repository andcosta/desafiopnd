import '../../styles/Container.css';
import pnd from '../../images/pdvendas.png';
import React, { Component } from 'react';

class EntryTalking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div className="entry-div">
        <img src={pnd} alt="logo" className="logo-pnd" />
        <div className="middle-div">
          <div className="login-dom">
            <p className="login-text"> Login </p>
          </div>
          <div className="login-dom with-margin">
            <input
              className="input-name"
              type="text"
              placeholder="Insira seu nome..."
              onChange={event => {
                this.setState({ name: event.target.value });
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
                if (this.state.name !== '') this.props.startChat();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EntryTalking;
