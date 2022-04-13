// this is on the angular side where we import the react components and expose to angular
const angular = require("angular");
const React = require("react");
import { react2angular } from "react2angular";

import MyComponent from "../react/components/SkippingAngular/MyComponent";
import WrapperCard from '../react/components/SkippingAngular/WrapperCard';

angular
  .module("react.components", [])
  .component(
    "myComponent",
    react2angular(MyComponent, ['name'], ["$state", "$stateParams"])
  )
  .component(
    'wrapperCard',
    react2angular(WrapperCard, ['someProp'])
  );
