angular
  .module("unicornWhisperer", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider",
  Router
])

function Router ($stateProvider) {
  $stateProvider
  .state("welcome",{
    url: "/",
    templateUrl: "/assets/js/ng-views/welcome.html"
  })
}
