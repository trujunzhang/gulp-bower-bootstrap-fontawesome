(function () {
    'use strict';

    angular
        .module('artistControllers', [])
        .controller('ListController', MyController);

    MyController.$inject = ['$scope', '$http'];

    function MyController($scope, $http) {

        /*jshint validthis: true */
        var vm = this;

        activate();

        ////////////////////////////

        function activate() {
            $http.get('js/data.json').success(function (data) {
                $scope.artists = data;
                $scope.artistOrder = 'name';
            });
        }
    }

})();
