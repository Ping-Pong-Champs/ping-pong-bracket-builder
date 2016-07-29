function TourneyController (UserService, $state, TourneyService, $rootScope) {

	let vm = this;
  	vm.loggedIn = false;
	vm.tourneyCreateShow = tourneyCreateShow;
	vm.tourneyCreateHide = tourneyCreateHide;
	vm.createTourney = createTourney;
	vm.tourneyShowObj = {
		createTourney: false
	};
	vm.players = {};
	vm.tourneys = [];
	vm.validSize = validSize;


  init();

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function init () {
    vm.loggedIn = UserService.isLoggedIn();
    TourneyService.getTourneys().then((res)=>{
    		console.log(res.data.tournaments);
			vm.tourneys = res.data.tournaments;
			console.log(vm.tourneys);
  	});
  };

	function validSize(tournament) {
		return tournament.size === 8 || tournament.size === 16;
	}

	function tourneyCreateShow(tourney){
		vm.tourneyShowObj.createTourney = true;
	}

	function tourneyCreateHide(tourney){
		vm.tourneyShowObj.createTourney = false;
	}

	function createTourney(tourney){
		TourneyService.postTourney(tourney).then( (res)=>{
			init();
		});
	}

}

TourneyController.$inject = ['UserService','$state', 'TourneyService', '$rootScope'];
export { TourneyController };
