function TourneyController ( $state) {

	let vm = this;
	vm.tourneyCreateShow = tourneyCreateShow;
	vm.tourneyCreateHide = tourneyCreateHide;
	vm.createTourney = createTourney;
	vm.tourney = {
		createTourney: false
	};

	vm.tourneys = [];

	function init (){
		// TourneyService.getTourneys().then((res)=>{
		// 	vm.tourneys = res.data;
		// 	console.log(vm.tourneys);
		// });
	}

	function tourneyCreateShow(tourney){
		vm.tourney.createTourney = true;
	}

	function tourneyCreateHide(tourney){
		vm.tourney.createTourney = false;
	}

	function createTourney(tourney){
		// TourneyService.addTourney(tourney).then( (res)=>{
		// 	vm.tourneys = res.data
		// });
	}

}

TourneyController.$inject = [ '$state'];
export { TourneyController };