function TourneyService ($cookies, $http, SERVER, UserService) {

  this.postTourney = postTourney;
  this.getTourneys  = getTourneys;
  this.getTourney = getTourney;
  this.createPlayer = createPlayer;
  this.addPlayerInTourney = addPlayerInTourney;
  this.getPlayerByNickname = getPlayerByNickname;
  this.seedTourney = seedTourney;


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

  function createPlayer(player){
  	return $http.post(SERVER.URL + 'players', player, UserService.headers());
  }

  function addPlayerInTourney (player, tourney){
  	return $http.post(SERVER.URL + 'tournaments/' + tourney.id +'/add-player', player, UserService.headers());
  }

  function getPlayerByNickname (player){
		return $http.get(SERVER.URL + 'players/' + player.nickname );
	}
}

TourneyService.$inject = ['$cookies', '$http', 'SERVER', 'UserService'];
export { TourneyService };
