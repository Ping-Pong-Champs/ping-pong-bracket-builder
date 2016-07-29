function SignupController (UserService, $cookies, $state) {

  let vm = this;
  vm.loginUser = loginUser;

  function loginUser (user) {
    UserService.login(user).then( 
      // Successful Response
      res => {
        $cookies.put('access_token', res.data.access_token);
        $cookies.put('username', res.data.username);
        $state.go('root.tournaments');
      }, 
      // Error Response (Client Error)
      error => {
        console.log(error.data.errors);
      }
    );
  }

}

SignupController.$inject = ['UserService', '$cookies', '$state'];
export { SignupController };