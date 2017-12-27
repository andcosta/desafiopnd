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
      talkingActive: false
    };
  }

  startChat() {
    this.setState({ talkingActive: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.talkingActive === true && <TalkingContainer />}
        {this.state.talkingActive === false && (
          <EntryTalking startChat={this.startChat.bind(this)} />
        )}
      </div>
    );
  }
}

export default Home;
