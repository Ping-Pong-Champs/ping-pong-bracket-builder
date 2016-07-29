function LiveTourneyController(UserService, TourneyService, $stateParams) {

  let vm = this;
  vm.players = [];
  vm.addPlayer = addPlayer;
  vm.tourney = {};
  vm.seedBracket = seedBracket;

  function init(){

    TourneyService.getTourney($stateParams.id).then( res => {
        vm.tourney = res.data;
        console.log(vm.tourney);
        vm.players = vm.tourney.players;
    });

  }
  init();

  function seedBracket () {
    TourneyService.seedTourney(vm.tourney.id).then( response => {
      console.log(response.data);
      vm.matches = response.data.matches;
      init();
    })
  };

  function addPlayer (player, tourney) {
  	TourneyService.getPlayerByNickname(player).then(function(res){
  		console.log("found player", player);
  		let addOptions = { player_id: res.data.id };
		TourneyService.addPlayerInTourney(addOptions, tourney).then((res)=>{
			vm.players.push(res.data);
		});
  	},
  	function(reason){
  		console.log("Creating new player and adding to tournament...")
		TourneyService.createPlayer(player).then((res)=>{
	  		let addOptions = { player_id: res.data.id };
			TourneyService.addPlayerInTourney(addOptions, tourney).then((res)=>{
				vm.players.push(res.data);
			});
  	},
  	(error) => {
  		console.log("Couldn't create player:", error)
  	})
  })
};
};

LiveTourneyController.$inject = ['UserService', 'TourneyService', '$stateParams'];

export { LiveTourneyController };
