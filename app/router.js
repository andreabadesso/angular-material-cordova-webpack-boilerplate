class Router {

    static configure(app) {
        app.config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<home></home>'
                })
            });
        }
    }

export { Router };
