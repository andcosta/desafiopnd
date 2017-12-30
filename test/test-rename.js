import Robot from '../src/robot/Robot';
import Messages from './mocks/messages.json';

const expect = require('chai').expect,
  robot = new Robot();

const answer = robot._getRandomAnswer();
const Message = Messages[0];

describe('Testing the robot answers', () => {
  it('Testing if is returning a corret answer. ', () => {
    expect(answer).to.be.a('string');
    expect(answer).to.not.be.empty;
  });
});

describe('Testing the messages object', () => {
  it('Testing if messages is an array. ', () => {
    expect(Messages).to.be.an('array');
    expect(Messages).to.not.be.null;
  });
  it('Testing if a message is an object. ', () => {
    expect(Message).to.be.an('object');
  });
  it('Testing if has both human and robot messages. ', () => {
    expect(Message.human).to.be.an('object');
    expect(Message.robot).to.be.an('object');
  });
  it('Testing the sender attr in the message', () => {
    expect(Message.robot.sender).to.be.equal('robot');
    expect(Message.human.sender).to.be.equal('human');
  });
  it('Testing if id Messages are not equals', () => {
    expect(Message.robot.key).to.not.be.equal(Message.human.key);
  });
  it('Testing the message has a valid key', () => {
    expect(Message.robot.key).to.be.a('number');
    expect(Message.human.key).to.be.a('number');
  });
});
