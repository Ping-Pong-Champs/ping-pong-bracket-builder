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
    templateUrl: 'templates/addAccount.tpl.html',
    controller: 'AddAccountController as vm'
  })

  .state('root.live-tourney', {
    url: '/live-tourney',
    templateUrl: 'templates/liveTourney.tpl.html',
    controller: 'LiveTourney as vm'
  })



  $urlRouterProvider.otherwise('/sign-in');


}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export { config };
