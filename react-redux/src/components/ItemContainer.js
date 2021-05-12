import React, { useState, useEffect } from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/icecream/icecreamActions";
import { connect } from "react-redux";
const ItemContainer = (props) => {
  return (
    <div>
      <h2>item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy item {props.cake}</button>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecreams;
  return { item: itemState };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());
  return { buyItem: dispatchFunction };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
