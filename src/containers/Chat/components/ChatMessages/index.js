import React from 'react';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import { getMessages } from '../../selectors';

const ChatMessages = ({
  messages,
}) => (
  <div className="message-list">
    {_map(messages, message => (
      <div key={`${message.userId}-${message.timeStamp}`} className="message-item">
        {message.text}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  messages: getMessages(state),
});

export default connect(mapStateToProps)(ChatMessages);