function config($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    templateUrl: 'templates/layout.tpl.html',
    contorller: 'LayoutController as vm',
    abstract: true
  })

  .state('root.sign-in', {
    url: '/sign-in',
    templateUrl: 'templates/signup.tpl.html',
    controller: 'SignupController as vm'
  })

  .state('root.add-account', {
    url: '/add-account',
    templateUrl: 'templates/',
    controller: 'AddAccountController as vm'
  })



  $urlRouterProvider.otherwise('/sign-in');


}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export { config };
