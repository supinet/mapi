'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:CepCtrl
 * @description
 * # CepCtrl
 * Controller of the mapiApp
 */


angular.module('mapiApp').controller('CepCtrl', function CepCtrl($http, $scope){
    $scope.busca = function(){
        $http.get('http://cep.correiocontrol.com.br/'+ $scope.cep + '.json')
        //$http.get('http://correiosapi.apphb.com/cep/'+ $scope.cep)
        .success(function(local){
            $scope.local_encontrado = local;
        console.log(local);
        })
        .error(function(e){
        console.log("Erro");
            alert("Este CEP não existe!");
        });
    };
    $scope.enter = function(e){
        if(e.keyCode == 13){
            $scope.busca();
        };
    };
});