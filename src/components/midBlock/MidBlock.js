import '../../styles/MidBlock.css';
import React, { Component } from 'react';
import TalkingList from '../talkingList/TalkingList';

class MidBlock extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mid-block-main">
        <TalkingList />
      </div>
    );
  }
}

export default MidBlock;
