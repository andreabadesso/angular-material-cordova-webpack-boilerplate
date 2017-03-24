let Main = {
    templateUrl: 'components/main/main.view.html',
    controllerAs: 'mainCtrl',
    controller: ['$mdSidenav', '$rootScope', function($mdSidenav, $rootScope) {
        this.appTitle = $rootScope.appTitle;
        this.toggleSidenav = function() { 
            $mdSidenav('left').toggle();
        };
    }]
};

export { Main };
