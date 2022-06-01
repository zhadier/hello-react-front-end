// constants
const GET_GREETINGS = 'GREETINGS/GET_GREETINGS';

// initial state
const initialState = 'Hello World';

// action creators
export const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

// thunk action functions
export const getGreetingsFromAPI = () => async (dispatch) => {
  await fetch('/v1/greetings')
    .then((response) => response.json())
    .then((json) => {
      dispatch(getGreetings(json.greeting));
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
