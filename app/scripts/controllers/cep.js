'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:CepCtrl
 * @description
 * # CepCtrl
 * Controller of the mapiApp
 */

angular.module('mapiApp').controller('CepCtrl', function($http, $scope){

    
    var app = angular.module('mapiApp',[]);
    
    app.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
 
      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["content-type"] = "application/json";
      $httpProvider.defaults.headers.common['X-User-Agent'] = "mapiApp";
    });
    

    var urlMapp = 'http://localhost:8080/mapi/endereco';
    var urlWebCep = 'http://correiosapi.apphb.com/cep/';
    //var urlWebCep = 'http://cep.correiocontrol.com.br/';

    $scope.buscaCepWeb = function(){
        //$http.get(urlWebCep + $scope.cep.codigo + '.json')
        //$http.get(urlWebCep + $scope.cep.codigo)
        $http.jsonp(urlWebCep + $scope.cep.codigo + '?callback=JSON_CALLBACK')
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
        $http.get(urlMapp).success(function(enderecos) {
            $scope.enderecos = enderecos;
            console.log(enderecos);
        }).error(function(erro) {
            console.log(enderecos);
            alert(erro);
        });
    }

    $scope.salvar = function() {
        if ($scope.local_encontrado.id == '') {
            $http.post(urlMapp, $scope.local_encontrado).success(function(local) {
                //$scope.enderecos.push($scope.local_encontrado);
                $scope.pesquisarEndereco();
                $scope.novo();
                console.log(local);
            }).error(function(erro){
                console.log(local);
                alert(erro);
            });
        } else {
            $http.put(urlMapp, $scope.local_encontrado).success(function(local) {
                $scope.pesquisarEndereco();
                $scope.novo();
                console.log(local);
            }).error(function(erro) {
                console.log(local);
                alert(erro);
            });
        }
    }

    $scope.excluir = function(id) {
        if (id == '') {
            alert('Selecione o endereco');
        } else {            
            $http.delete(urlMapp + "/" + id).success(function() {
                $scope.pesquisarEndereco();
                $scope.novo();
            }).error(function (erro) {
                alert(erro);
            });
        }
    }

    $scope.selecionaEndereco = function(local_encontrado) {
        $scope.local_encontrado = local_encontrado;
        $scope.endereco = local_encontrado;
    }

    $scope.pesquisarEndereco();

    $scope.novo = function() {
        $scope.local_encontrado = "";
        $scope.cep.codigo = "";
    }
    
});