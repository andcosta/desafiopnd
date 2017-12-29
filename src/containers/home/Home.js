import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import TalkingContainer from '../../components/container/TalkingContainer';
import EntryTalking from '../../components/container/EntryTalking';
import '../../styles/App.css';
import pnd from '../../images/pdvendas.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      talkingActive: false,
      user: ''
    };
  }

  startChat() {
    this.setState({ talkingActive: true });
  }

  onChangeName(name) {
    this.setState({ user: name });
  }

  getUserName() {
    return this.state.user;
  }

  render() {
    return (
      <div className="App">
        {this.state.talkingActive === true && (
          <TalkingContainer getNameUser={this.getUserName.bind(this)} />
        )}
        {this.state.talkingActive === false && (
          <EntryTalking
            startChat={this.startChat.bind(this)}
            onChangeName={name => this.onChangeName(name)}
          />
        )}
      </div>
    );
  }
}

export default Home;
