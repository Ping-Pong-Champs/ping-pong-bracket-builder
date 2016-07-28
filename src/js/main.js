import angular from 'angular';
import 'angular-ui-router';

//import our server
import { SERVER } from './utilities/server'

//import our config

//import our constants
import { config } from './utilities/config';


//import our controllers
import { LayoutController } from './controllers/layout.controller';
import { SignupController } from './controllers/signup.controller';

//import our services
import { UserService } from './services/user.service';

angular
	.module('app', ['ui.router'])
	.config(config)
	.controller('LayoutController', LayoutController)
	.controller('SignupController', SignupController)
	.constant ('SERVER', SERVER)
;
