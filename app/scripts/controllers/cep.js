'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:CepCtrl
 * @description
 * # CepCtrl
 * Controller of the mapiApp
 */
angular.module('mapiApp')
  .controller('CepCtrl', function($scope, $http) {
    $scope.pesquisaEnderecoPorCep = function() {
        $http.get('http://correiosapi.apphb.com/cep/69058060').success(function(cep) {
            $scope.cep = cep;
        }).error(function(erro){
            alert(erro);
        });
    } 
  $scope.pesquisaEnderecoPorCep();
});