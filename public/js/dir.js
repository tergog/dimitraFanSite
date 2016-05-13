(function(){
    angular
        .module('MagentoPortfolio')
        .directive('navMenu', function (){
            return {
                restrict: "E",
                templateUrl: "/partials/nav-menu.html",
                link: function ($scope, element) {
                    element.on("click", function () {
                        element.find('div').toggleClass("nav-logo-x");
                        element.find('ul').toggleClass("nav-content-x");
                    });
                }
            }
        })
        .directive('main', function (){
            return {
               restrict: "E",
               templateUrl: "/partials/main.html"
           }
       });
})();