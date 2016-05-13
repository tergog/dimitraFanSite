(function(){
    angular
        .module('MagentoPortfolio', ['ui.router'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/album');

        $stateProvider
            .state('inner' ,{
                url: '/inner',
                templateUrl: '/partials/inner/index.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/partials/album/index.html',
                controller: 'AlbumController',
                controllerAs: 'albumCtrl'
            });
    }
})();