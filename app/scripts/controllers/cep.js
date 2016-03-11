'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:CepCtrl
 * @description
 * # CepCtrl
 * Controller of the mapiApp
 */

angular.module('mapiApp').controller('CepCtrl', function($http, $scope){

    var urlMapp = 'http://localhost:8080/mapi/endereco';
    //var urlWebCep = 'http://correiosapi.apphb.com/cep/';
    var urlWebCep = 'http://cep.correiocontrol.com.br/';

    $scope.buscaCepWeb = function(){
        $http.get(urlWebCep + $scope.cep.codigo + '.json')
        //$http.get(urlWebCep + $scope.cep.codigo)
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
        $http.get(urlMapp).success(function(endereco) {
            $scope.enderecos = endereco;
            console.log(endereco);
        }).error(function(erro) {
            console.log(endereco);
            alert(erro);
        });
    }

    $scope.salvar = function() {
        if ($scope.local_encontrado.codigo != '') {
            $http.post(urlMapp, $scope.local_encontrado).success(function(local_encontrado) {
                $scope.enderecos.push($scope.local_encontrado);
                $scope.novo();
                console.log(local_encontrado)
            }).error(function(erro){
                console.log(local_encontrado)
                alert(erro);
            });
        } else {
            $http.put(urlMapp, $scope.local_encontrado).success(function(local_encontrado) {
                $scope.pesquisarEndereco();
                $scope.novo();
                console.log(local_encontrado)
            }).error(function(erro) {
                console.log(local_encontrado)
                alert(erro);
            });
        }
    }

    $scope.excluir = function() {
        if ($scope.cep.codigo == '') {
            alert('Selecione o endereco');
        } else {            
            $http.delete('http://localhost:8080/mapi/endereco' + "/" + $scope.cep.codigo).success(function() {
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

    $scope.novo = function() {
        $scope.endereco = "";
    }
    
});