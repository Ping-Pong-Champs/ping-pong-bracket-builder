function LiveTourneyController(UserService, TourneyService, $stateParams) {

  let vm = this;

  function init(){

    TourneyService.getTourney($stateParams.id).then( res => {
        vm.tourney = res.data;
        console.log(vm.tourney);
    });

  }
  init();

}

LiveTourneyController.$inject = ['UserService', 'TourneyService', '$stateParams'];

export { LiveTourneyController };
