(function(){
	angular
		.module('MagentoPortfolio')
		.controller('AlbumController', ['$http', function($http) {
                        var album = this;
                        $http({method:'GET', url:'../album.json'}).success(function (data) {
                            album.data = data;
                        });
                }]);

})();