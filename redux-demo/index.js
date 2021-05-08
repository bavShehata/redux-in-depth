const BUY_CAKE = "BUY_CAKE";

const buyCake = () => ({
  type: BUY_CAKE,
  info: "First redux action",
});

const initialState = {
  numOfCakes: 10,
};
const reducer = (state = initialState, action = buyCake) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};
