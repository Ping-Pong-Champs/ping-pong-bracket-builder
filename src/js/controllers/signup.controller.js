function SignupController(UserService, $state) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser(user){
    UserService.login(user).then(function(res){
      console.log(res);
      $state.go('root.tournaments');
    })
  }


}

SignupController.$inject = ['UserService', '$state'];

export { SignupController };
