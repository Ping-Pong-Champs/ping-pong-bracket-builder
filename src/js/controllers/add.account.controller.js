function AddAccountController (UserService, $state){

  let vm = this;
  vm.createUser = createUser;

  function createUser (user) {
    UserService.signup(user).then( res => {
      console.log(res);
    });
  }

}

AddAccountController.$inject = ['UserService', '$state'];
export { AddAccountController };