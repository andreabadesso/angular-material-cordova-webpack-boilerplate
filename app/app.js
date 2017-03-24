import './styles/main.styl';

import { Router } from './router.js';

import './components/main/main.view.html';
import './components/home/home.view.html';
import './components/menu/menu.view.html';

import { Main } from './components/main/main.js';
import { Home } from './components/home/home.js';
import { Menu } from './components/menu/menu.js';
//import 'ng-cordova/dist/ng-cordova.js';

const app = angular.module('App', ['ui.router', 'ngMaterial']);

Router.configure(app);

app.component('main', Main);
app.component('home', Home);
app.component('menu', Menu);

app.run(['$rootScope', function($rootScope) {
    $rootScope.appTitle = 'Generic App';
}]);
