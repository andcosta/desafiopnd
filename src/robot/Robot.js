import manuh from 'manuh';
import React, { Component } from 'react';

class Robot extends Component {
  constructor() {
    super();
    this.answers = [
      'Em que posso ajuda-lo',
      'Claro, gostaria de falar sobre o que ?',
      'Não estou entendendo senhor.',
      'Não tenho idéia do que está falando.',
      'Posso lhe responder mais tarde ?',
      'não tenho idéia do que está falando. ',
      'Poderia perguntar isso mais tarde ? ',
      'Claro que posso lhe conceder permissão no sistema.'
    ];
  }

  _getRandomAnswer() {
    const value = Math.floor(Math.random() * 8);
    return this.answers[value];
  }

  sendMessage(idMsg) {
    manuh.publish('msg/send', {
      value: this._getRandomAnswer(),
      sender: 'robot',
      key: idMsg
    });
  }
}

export default Robot;
