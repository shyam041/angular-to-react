const partialComponent = {
  template: `<div class="{{$ctrl.color}} route">
    <h3>Partial View without React</h3>
    <div class="button-row">
      <button ng-click="$ctrl.go()">Go to React Component</button>
    </div>
  </div>`,
  controller: function PartialController(
    $ngRedux,
    $scope,
    $state,
  ) {
    const unsubscribe = $ngRedux.connect(
      state => ({
        go: () => $state.go("myComponent")
      }),
    )(this);
    $scope.$on("destroy", unsubscribe);
  }
};

export default partialComponent;
