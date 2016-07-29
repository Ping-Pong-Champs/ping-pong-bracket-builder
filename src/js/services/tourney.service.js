function TourneyService ($cookies, SERVER, UserService) {

  this.postTourney = postTourney;
  this.getTourneys  = getTourneys;


  function postTourney (tourney) {
    return $http.post(SERVER.URL + "tournaments", tourney, UserService.headers());
  }

  function getTourneys () {
  	return $http.get(SERVER.URL + "tournaments");
  }

}

TourneyService.$inject = ['$cookies', 'SERVER', 'UserService'];
export { TourneyService };