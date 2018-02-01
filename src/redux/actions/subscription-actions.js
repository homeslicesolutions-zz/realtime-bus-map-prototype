import ActionTypes from '../constants';

// ACTIONS
const transChannelPull = (payload) => ({
  type   : ActionTypes.TRANS_CHANNEL_PULL,
  payload
});

// EXPORT
export {transChannelPull};
