'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:CepCtrl
 * @description
 * # CepCtrl
 * Controller of the mapiApp
 */


angular.module('mapiApp').controller('CepCtrl', function($http, $scope){

    //urlEndereco = 'http://localhost:8080/mapi/rs/endereco';

    $scope.busca = function(){
        $http.get('http://cep.correiocontrol.com.br/'+ $scope.cep.codigo + '.json')
        //$http.get('http://correiosapi.apphb.com/cep/'+ $scope.cep.cep)
        .success(function(local){
            $scope.local_encontrado = local;
        console.log(local);
        })
        .error(function(e){
        console.log("Erro");
            alert("CEP não encontrado!");
        });
    };

    $scope.enter = function(e){
        if(e.keyCode == 13){
            $scope.busca();
        };
    };

    $scope.pesquisarEndereco = function() {
        $http.get('http://localhost:8080/mapi/rs/endereco').success(function(endereco) {
            $scope.endereco = endereco;
        }).error(function(erro) {
            alert(erro);
        });
    }

    $scope.salvar = function() {
        if ($scope.cep.codigo == '') {
            $http.post('http://localhost:8080/mapi/rs/endereco', $scope.endereco).success(function(endereco) {
                $scope.local_encontrado.push($scope.endereco);
                $scope.novo();
            }).error(function(erro){
                alert(erro);
            });
        } else {
            $http.put('http://localhost:8080/mapi/rs/endereco', $scope.endereco).success(function(endereco) {
                $scope.pesquisarEndereco();
                $scope.novo();
            }).error(function(erro) {
                alert(erro);
            });
        }
    }

    $scope.excluir = function() {
        if ($scope.cep.codigo == '') {
            alert('Selecione o endereco');
        } else {
            urlExcluir = 'http://localhost:8080/mapi/rs/endereco' + "/" + $scope.cep.codigo;
            $http.delete(urlExcluir).success(function() {
                $scope.pesquisarEndereco();
                $scope.novo();
            }).error(function (erro) {
                alert(erro);
            });
        }
    }

    $scope.selecionaEndereco = function(endereco) {
        $scope.endereco = endereco;
    }

    $scope.pesquisarEndereco();
});