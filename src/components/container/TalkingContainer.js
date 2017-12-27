import '../../styles/Container.css';
import React, { Component } from 'react';
import Header from '../header/Header';
import MidBlock from '../midBlock/MidBlock';
import Footer from '../footer/Footer';

class TalkingContainer extends Component {
  render() {
    return (
      <div className="entry">
        <Header />
        <MidBlock />
        <Footer />
      </div>
    );
  }
}

export default TalkingContainer;
