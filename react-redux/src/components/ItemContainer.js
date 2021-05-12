import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
const ItemContainer = (props) => {
  return (
    <div>
      <h2>item - {props.item}</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecreams;
  return { item: itemState };
};
export default connect(mapStateToProps)(ItemContainer);
