import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import { groupBy } from 'underscore';

import { SEND_MESSAGE } from '../../reducers/messages';
import { CHANGE_NAME } from '../../reducers/auth';

import { Messages } from '../../../api/messages/messages';
import ChatScreen from '../../components/chatScreen/ChatScreen';

const ChatScreenContainer = withTracker(() => {
  const messagesHandle = Meteor.subscribe('messages.all');
  const loading = !messagesHandle.ready();
  const messages = Messages.find().fetch();
  const messagesGroupBy = groupBy(messages, message => message.userId);

  return {
    loading,
    messages,
    messagesGroupBy,
  }
})(ChatScreen);

const mapStateToProps = (state, props) => {
  return {
    isSending: state.messages.isSending,
    error: state.messages.error,
    userId: state.auth.userId,
    name: state.auth.name,
  }
};

const propsMapping = dispatch => ({
  sendMessage: payload => dispatch({ type: SEND_MESSAGE, payload }),
  changeName: name => dispatch({ type: CHANGE_NAME, name }),
});

export default connect(mapStateToProps, propsMapping)(ChatScreenContainer);
