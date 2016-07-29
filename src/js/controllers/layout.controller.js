function LayoutController (UserService, $rootScope, $state) {

  let vm = this;
  vm.logOut = logOut;
  vm.loggedIn = false;
  vm.cartCount = 0;
  vm.cartTotal = 0;

  init();

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function init () {

    vm.loggedIn = UserService.isLoggedIn();

  };

  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }

}

LayoutController.$inject = ['UserService', '$rootScope', '$state'];
export { LayoutController };