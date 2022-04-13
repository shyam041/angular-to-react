const angular = require("angular");
const React = require("react");
import uiRouter from "angular-ui-router";
import ngRedux from "ng-redux";
import partial from "./components/partial.component";
import "./components";

const initializeAngularApp = () => {
  const app = angular.module("app", [uiRouter, ngRedux, "react.components"]);

  app.component("partial", partial);

  app.config(($stateProvider, $locationProvider) => {
    $stateProvider.state({
      name: "myComponent",
      url: "/react-component",
      template: `<my-component name="'something'"></my-component>`
    });
    $stateProvider.state({
      name: "home",
      url: "/?test&second",
      component: "partial"
    });
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  });
};

export default initializeAngularApp;
