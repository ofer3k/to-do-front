import React, { useState,useReducer } from "react";
import ProductUpdateContext from "./app-context";
import {productReducer} from '../reducer/productReducers'

const ProductUpdateState = (props) => {

  const [list,dispatch]=useReducer(productReducer,[])

  return (
    <ProductUpdateContext.Provider
      value={{
        list,
        dispatch
      }}
    >
      {props.children}
    </ProductUpdateContext.Provider>
  );
};

export default ProductUpdateState;