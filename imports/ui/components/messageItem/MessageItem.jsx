import React from 'react';
import { MessageItemStyled, UserAvatarStyled } from '../../stylesheets';

const MessageItem = ({ mine, message, name }) => (
  <MessageItemStyled mine={Boolean(mine)}>
    {!mine &&
      <UserAvatarStyled>
        {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
      </UserAvatarStyled>
    }
    <span>{message}</span>
  </MessageItemStyled>
);

export default MessageItem;
