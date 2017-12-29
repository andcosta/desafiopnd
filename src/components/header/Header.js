import '../../styles/Header.css';
import React, { Component } from 'react';
import robot from '../../images/robot.png';
import manuh from 'manuh';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.getNameUser()
    };
  }

  render() {
    return (
      <div className="main-header">
        <div className="image-container ">
          <img src={robot} alt="logo" className="robot-style float-robot" />
        </div>
        <p className="name left">RobotPND</p>
        <p className="name right">{this.state.user}</p>
      </div>
    );
  }
}

export default Header;
