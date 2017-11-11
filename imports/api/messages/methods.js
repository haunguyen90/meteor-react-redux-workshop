import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Messages } from './messages';

Meteor.methods({
  messagesInsert(payload) {
    check(payload, Object);

    if (!payload.message) {
      throw new Meteor.Error(400, 'Message cannot be empty.');
    }

    if (!payload.name) {
      throw new Meteor.Error(400, 'Please enter your name first.');
    }

    if (!payload.userId) {
      throw new Meteor.Error(500, 'Could not identify you.');
    }

    return Messages.insert({
      userId: payload.userId,
      name: payload.name,
      message: payload.message,
      createdAt: new Date(),
    });
  },
});
