function SignupController(UserService, $state) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser(user){
    UserService.login(user).then(function(res){
      console.log(res);
    })
  }


}

SignupController.$inject = ['UserService', '$state'];

export { SignupController };
