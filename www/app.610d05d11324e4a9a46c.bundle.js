webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Home = {
    templateUrl: 'components/home/home.view.html',
    controllerAs: 'homeCtrl',
    controller: [function () {}]
};

exports.Home = Home;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Main = {
    templateUrl: 'components/main/main.view.html',
    controllerAs: 'mainCtrl',
    controller: ['$mdSidenav', '$rootScope', function ($mdSidenav, $rootScope) {
        this.appTitle = $rootScope.appTitle;
        this.toggleSidenav = function () {
            $mdSidenav('left').toggle();
        };
    }]
};

exports.Main = Main;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Menu = {
    templateUrl: 'components/menu/menu.view.html',
    controllerAs: 'menuCtrl',
    controller: [function () {}]
};

exports.Menu = Menu;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);
    }

    _createClass(Router, null, [{
        key: 'configure',
        value: function configure(app) {
            app.config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider.state('home', {
                    url: '/',
                    template: '<home></home>'
                });
            });
        }
    }]);

    return Router;
}();

exports.Router = Router;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

var path = 'components/home/home.view.html';
var html = "This is the home route\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var path = 'components/main/main.view.html';
var html = "<md-sidenav class=\"md-sidenav-left\" md-component-id=\"left\" md-whiteframe=\"4\">\n    <menu></menu>\n</md-sidenav>\n\n<md-content>\n    <md-toolbar class=\"md-hue-2\">\n        <div class=\"md-toolbar-tools\">\n\n            <md-button class=\"md-icon-button\" aria-label=\"Settings\" ng-click=\"mainCtrl.toggleSidenav()\">\n\n                <md-icon aria-label=\"menu\" class=\"material-icons step\" ng-bind=\"'menu'\">\n                </md-icon>\n            </md-button>\n\n            <h2 flex md-truncate>Generic App</h2>\n\n            <md-menu md-position-mode=\"target-right target\">\n                <md-button aria-label=\"Open demo menu\" class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n                    <md-icon md-menu-origin ng-bind=\"'more_vert'\"></md-icon>\n                </md-button>\n                <md-menu-content width=\"4\">\n                    <md-menu-item ng-repeat=\"item in [1, 2, 3]\">\n                        <md-button>\n                            <div layout=\"row\" flex>\n                                <p flex>Option {{item}}</p>\n                            </div>\n                        </md-button>\n                    </md-menu-item>\n                </md-menu-content>\n            </md-menu>\n\n        </div>\n    </md-toolbar>\n    <md-content>\n        <div ui-view=\"\"></div>\n    </md-content>\n</md-content>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var path = 'components/menu/menu.view.html';
var html = "This is the menu view\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./main.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./main.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var _router = __webpack_require__(10);

__webpack_require__(13);

__webpack_require__(12);

__webpack_require__(14);

var _main = __webpack_require__(8);

var _home = __webpack_require__(7);

var _menu = __webpack_require__(9);

//import 'ng-cordova/dist/ng-cordova.js';

var app = angular.module('App', ['ui.router', 'ngMaterial']);

_router.Router.configure(app);

app.component('main', _main.Main);
app.component('home', _home.Home);
app.component('menu', _menu.Menu);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.appTitle = 'Generic App';
}]);

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background: #fff;\n}\n", ""]);

// exports


/***/ })
],[19]);
//# sourceMappingURL=app.610d05d11324e4a9a46c.bundle.js.map