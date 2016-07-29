function TourneyService ($cookies, $http, SERVER, UserService) {

  this.postTourney = postTourney;
  this.getTourneys  = getTourneys;
  this.getTourney = getTourney;


  function postTourney (tourney) {
    return $http.post(SERVER.URL + "tournaments", tourney, UserService.headers());
  }

  function getTourneys () {
  	return $http.get(SERVER.URL + "tournaments");
  }

  function getTourney(id) {
    return $http.get(SERVER.URL + 'tournaments/' + id);
  }

  function seedTourney(id){
    return $http.post(SERVER.URL + 'tournaments/' + id + '/seed', null, UserService.headers());
  }
}

TourneyService.$inject = ['$cookies', '$http', 'SERVER', 'UserService'];
export { TourneyService };
