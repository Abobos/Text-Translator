export const loading = (state = false, action) => {
  switch (action.type) {
    case 'Receiving Data':
      return true;
    case 'Received Data':
      return false;
    default:
      return state;
  }
};
