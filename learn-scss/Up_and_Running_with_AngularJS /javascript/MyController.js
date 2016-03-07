(function () {
    'use strict';

    angular
        .module('myApp', [])
        .controller('MyController', MyController);

    MyController.$inject = ['$scope', '$http'];

    function MyController($scope, $http) {

        /*jshint validthis: true */
        var vm = this;

        activate();

        ////////////////////////////

        function activate() {
            $http.get('js/data.json').success(function (data) {
                $scope.artists = data;
                $scope.artistOrder = 'name'
            });
        }

    }

})();
