import angular from 'angular';
import 'angular-ui-router';

//import our server
import { SERVER } from './utilities/server'

//import our constants


//import our controllers

//import our services

angular
	.module('app', ['ui.router'])
	.constant ('SERVER', SERVER)