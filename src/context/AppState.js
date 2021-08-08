import React, { useState,useReducer } from "react";
import ProductUpdateContext from "./app-context";
import {productReducer} from '../reducer/productReducers'

const ProductUpdateState = (props) => {
  // const [missionList, setMissionList] = useState([]);

  const [list,dispatch]=useReducer(productReducer,[{title:'ofer',isDone:false,description:'ksadbflkjasdf'},{title:'ofer',isDone:false,description:'ksadbflkjasdf'}])

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