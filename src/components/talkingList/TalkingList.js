import '../../styles/TalkingList.css';
import manuh from 'manuh';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TalkingList extends Component {
  constructor() {
    super();
    this.startListenMessage();
    this.state = {
      msgs: []
    };
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  startListenMessage() {
    manuh.subscribe('msg/send', msgSended => {
      const tmp = this.state.msgs;
      tmp.push(msgSended);
      this.setState({ msgs: tmp });
    });
  }

  render() {
    return (
      <div
        className="all-parent-style"
        ref={el => {
          this.messagesContainer = el;
        }}
      >
        {this.state.msgs.map(listValue => {
          return (
            <div className="all-line" key={listValue.key}>
              <div
                className={
                  listValue.sender === 'human' ? 'human-msg' : 'robot-msg'
                }
              >
                <p className="msg-out">{listValue.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TalkingList;
