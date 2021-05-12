const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

//middleware
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
const fetchUserSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});
const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest);
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchUserFailure(error));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
