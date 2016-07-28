import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies'

//import our server
import { SERVER } from './utilities/server'

//import our config

//import our constants
import { config } from './utilities/config';


//import our controllers
import { LayoutController } from './controllers/layout.controller';
import { SignupController } from './controllers/signup.controller';
import { AddAccountController } from './controllers/add.account.controller';
import { TourneyController } from './controllers/tourney.controller';
import { LiveTourney } from './controllers/live.tourney.controller';

//import our services
import { UserService } from './services/user.service';

angular
	.module('app', ['ui.router', 'ngCookies'])
	.config(config)
	.controller('LayoutController', LayoutController)
	.controller('SignupController', SignupController)
	.controller('AddAccountController', AddAccountController)
	.controller('TourneyController', TourneyController)
	.controller('LiveTourney', LiveTourney)
	.service('UserService', UserService)
	.constant ('SERVER', SERVER)
;
