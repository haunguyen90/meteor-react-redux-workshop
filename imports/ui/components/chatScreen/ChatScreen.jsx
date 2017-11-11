import React from 'react';
import PropTypes from 'prop-types';

import {
  ChatScreenStyled, ChatHeaderStyled, ChatContentStyled,
  ChatInputStyled, InputNameStyled,
} from '../../stylesheets';

import MessageItem from '../messageItem/MessageItem';

class ChatScreen extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired,
    messages: PropTypes.array,
    name: PropTypes.string,
  }

  static defaultProps = {
    messages: [],
    name: '',
  }

  componentDidMount() {
    this.ChatContent.scrollTop = this.ChatContent.scrollHeight;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.ChatContent.scrollTop = this.ChatContent.scrollHeight;
    }
  }

  onNameChange = (e) => {
    const name = e.currentTarget.value;
    if (name && typeof name === 'string') {
      this.props.changeName(name);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const message = e.currentTarget.value;
      const payload = {
        userId: this.props.userId,
        name: this.props.name,
        message,
      };
      this.props.sendMessage(payload);
      e.currentTarget.value = '';
    }
  }

  render() {
    return (
      <ChatScreenStyled>
        <ChatHeaderStyled>
          <InputNameStyled
            placeholder="Enter your name here..."
            type="text"
            onChange={this.onNameChange}
            value={this.props.name}
          />
        </ChatHeaderStyled>
        <ChatContentStyled
          innerRef={(element) => { this.ChatContent = element; }}
        >
          {this.props.messages.map(item => (
            <MessageItem
              key={item._id}
              message={item.message}
              mine={item.userId === this.props.userId}
              name={item.name}
            />
          ))}
        </ChatContentStyled>

        <ChatInputStyled
          type="text"
          placeholder="Type a message..."
          onKeyPress={this.handleKeyPress}
        />

      </ChatScreenStyled>
    );
  }
}

export default ChatScreen;
