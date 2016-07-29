function TourneyController (UserService, $state, TourneyService, $rootScope) {

	let vm = this;
	vm.logOut = logOut;
  	vm.loggedIn = false;
	vm.tourneyCreateShow = tourneyCreateShow;
	vm.tourneyCreateHide = tourneyCreateHide;
	vm.createTourney = createTourney;
	vm.tourney = {
		createTourney: false
	};
	vm.players = {};
	vm.tourneys = [];


  init();

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function init () {
    vm.loggedIn = UserService.isLoggedIn();
    TourneyService.getTourneys().then((res)=>{
			vm.tourneys = res.data;
			console.log(vm.tourneys);
  	});
  };

	function tourneyCreateShow(tourney){
		vm.tourney.createTourney = true;
	}

	function tourneyCreateHide(tourney){
		vm.tourney.createTourney = false;
	}

	function createTourney(tourney){
		TourneyService.postTourney(tourney).then( (res)=>{
			vm.tourneys = res.data
		});
	}

}

TourneyController.$inject = ['UserService','$state', 'TourneyService', '$rootScope'];
export { TourneyController };