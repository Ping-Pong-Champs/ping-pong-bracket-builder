function LiveTourneyController(UserService, TourneyService, $stateParams) {

  let vm = this;
  vm.players = [];
  vm.addPlayer = addPlayer;
  vm.tourney = {};

  function init(){

    TourneyService.getTourney($stateParams.id).then( res => {
        vm.tourney = res.data;
        console.log(vm.tourney);
        vm.players = vm.tourney.players;
    });

  }
  init();

  function addPlayer (player, tourney) {
  	TourneyService.getPlayerByNickname(player).then(function(res){
  		let addOptions = { player_id: res.data.id };
		TourneyService.addPlayerInTourney(addOptions, tourney).then((res)=>{
			vm.players.push(res.data);
		});  		
  	},
  	function(reason){
		TourneyService.createPlayer(player).then((res)=>{
	  		let addOptions = { player_id: res.data.id };
			TourneyService.addPlayerInTourney(addOptions, tourney).then((res)=>{
				vm.players.push(res.data);
			});  		
  	})
  })
};
};

LiveTourneyController.$inject = ['UserService', 'TourneyService', '$stateParams'];

export { LiveTourneyController };
