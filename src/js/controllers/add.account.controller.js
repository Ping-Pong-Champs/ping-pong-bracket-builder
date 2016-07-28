function AddAccountController (UserService, $state){

  let vm = this;
  vm.createUser = createUser;

  function createUser (user) {
    UserService.signup(user).then( res => {
      $state.go('root.tournaments');
    });
  }

}

AddAccountController.$inject = ['UserService', '$state'];
export { AddAccountController };