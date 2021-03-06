export const USER_INFO = 'USER_INFO';

const INITIAL_STATE = {
  email: '',
};

const userInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        email: action.value.email,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
