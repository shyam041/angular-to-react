import React from "react";
import NestedComponent from './NestedComponent';

const MyComponent = ({name})=>{
  return(<>
    <h1>Hi, {name}</h1>
    <NestedComponent/>
  </>)
}

export default MyComponent;