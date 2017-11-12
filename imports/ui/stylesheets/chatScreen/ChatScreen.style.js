import styled, { css } from 'styled-components';

export const ChatScreenStyled = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 3px;
  margin-top: 20px;
`;

export const ChatHeaderStyled = styled.div`
  background-color: #4080ff;
  padding: 5px;
  color: white;
  box-shadow: 0px 2px 2px #888888;
`;

export const ChatContentStyled = styled.div`
  padding: 10px;
  height: 414px;
  overflow: scroll;
`;

export const ChatInputStyled = styled.input`
  border: none;
  border-top: 1px solid #969494;
  width: calc(100% - 5px);
  padding: 5px 0 5px 5px;
  height: 22px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder{
    color: #969494; 
  }
`;

export const MessageItemStyled = styled.div`
  padding: 5px 0;
  
  span {
    border: 1px solid #969494;
    border-radius: 15px;
    padding: 5px 10px;
    display: inline-block;
    max-width: 70%;
    line-height: 1.2;
  }
  
  ${props => props.mine && css`
    text-align: right;
    span {
      background-color: #4080ff;
      color: white;
    }
  `}
`;

export const InputNameStyled = styled.input`
  background: transparent;
  border: none;
  color: white;
  width: 100%;
  height: 20px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder{
    color: white; 
  }
`;

export const UserAvatarStyled = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  color: white;
  background-color: grey;
  font-size: 9px;
  line-height: 10px;
  margin-right: 5px;
`;