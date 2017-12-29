import '../../styles/Footer.css';
import manuh from 'manuh';
import React, { Component } from 'react';
import Robot from '../../robot/Robot';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.robot = new Robot();
    this.state = {
      msg: '',
      cont: 0
    };
  }

  talking() {
    this.sendMessage();
    this.replyFromRobot();
    this.cleanMessage();
  }

  cleanMessage() {
    this.setState({ msg: '' });
  }

  sendMessage() {
    manuh.publish('msg/send', {
      value: this.state.msg,
      sender: 'human',
      key: this.state.cont
    });
    this.incrementMessageId();
  }

  replyFromRobot() {
    this.robot.sendMessage(this.state.cont);
    this.incrementMessageId();
  }

  incrementMessageId() {
    this.state.cont++;
  }

  render() {
    return (
      <div className="main-footer">
        <div className="cointaner-text-area">
          <textarea
            className="text-area"
            placeholder="Digite aqui sua mensagem..."
            value={this.state.msg}
            onChange={newValue => {
              this.setState({ msg: newValue.target.value });
            }}
            onKeyPress={event => {
              if (event.key === 'Enter' && this.state.msg.trim() !== '')
                this.talking();
            }}
          />
          <input
            className={
              this.state.msg.trim() !== ''
                ? 'button-start send-button send-avaiable'
                : 'button-start send-button send-disable'
            }
            type="submit"
            value="Enviar"
            onClick={() => {
              if (this.state.msg.trim() !== '') this.talking();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
