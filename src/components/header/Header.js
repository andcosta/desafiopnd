import '../../styles/Header.css';
import React, { Component } from 'react';
import robot from '../../images/robot.png';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="image-container ">
          <img src={robot} alt="logo" className="robot-style float-robot" />
        </div>
        <p className="robot-name">RobotPND</p>
      </div>
    );
  }
}

export default Header;
