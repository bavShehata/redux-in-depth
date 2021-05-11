const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => ({
  type: BUY_CAKE,
  info: "First redux action",
});
const buyIcecream = () => ({
  type: BUY_ICECREAM,
  info: "Second redux action",
});
const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 5,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case BUY_ICECREAM:
      return { ...state, numOfIcecreams: state.numOfIcecreams - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
