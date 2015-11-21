'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('AllCtrl', function ($scope, $location , conferenceService) {

    $scope.service = conferenceService;

    $scope.users = $scope.service.users;

    $scope.comm = {"user":$scope.service.currentUser.user};

    $scope.tag = "";

    var conferencex ={};


    $scope.$watch( 'service.conferences', function(){
      $scope.conferences = $scope.service.conferences;

      for(var i=0;i < $scope.conferences.length ; i++){
          $scope.conferences[i].select = "";
      }

      $scope.tags = [];

    });


    $scope.volver = function ( ) {

      $location.path('/favorites');

    };

    $scope.favorito = function(idx){
       var us =  $scope.service.currentUser;

       var favs = us.favorites;

       if(us.favorites){
       }else{
           favs = [];
       }


       var aun = true;
       for(var i=0; i < favs.length && aun; i ++ ){
           if (favs[i] == idx){
               aun = false;
           }
       }

       if(aun){
           favs.push(idx);
           us.favorites = favs;
           $scope.service.createOrUpdateUser(us);
           //$scope.service.currentUser = us;
           alert("Ahora tienes la conferencia como favorito");
       }else{
           alert("Ya tienes la conferencia como favorito");
       }

    }

    $scope.seleccionar = function(conf) {

              for(var i=0;i < $scope.conferences.length ; i++){
          $scope.conferences[i].select = "";
      }

        conf.select = "success";
        conferencex = conf;

        if(conferencex.tags){
          $scope.tags = conferencex.tags;
        }else{
          $scope.tags = [];
        }

        //alert(conferencex.name);

    }

    $scope.comentar = function(){

      if(conferencex.comments){
      }else{
        conferencex.comments = [];
      }
      conferencex.comments.push($scope.comm);


        $scope.service.createOrUpdate(conferencex);

        $scope.comm.comment = "";

        alert("Comentario realizado");

    }

    $scope.taggear = function(){

      if(conferencex.tags){
      }else{
        conferencex.tags = [];
      }
      conferencex.tags.push($scope.tag);


        $scope.service.createOrUpdate(conferencex);

        $scope.tag = "";

        $scope.tags = conferencex.tags;

        alert("Conferencia Taggeada");

    }

    $scope.eliminar = function(index,id){
      //$scope.conferences.$remove(index);
      $scope.service.conferences.$remove(index).then(function(){
        $scope.buscar();
      });

      var urs = $scope.service.users ;

      for (var i = 0; i < urs.length; i ++){
        var us = urs[i];
        var favv = us.favorites;
        if(favv){
          for(var h=0; h < favv.length; h ++){
            if(favv[h] == id){
              favv.splice(h,1);
              $scope.service.createOrUpdateUser(us);
            }
          }
        }

      }


    //  alert("eliminado "+ index + " "+ id);
    };

    $scope.eliminarTag = function(index){

      conferencex.tags.splice(index,1);

      $scope.service.createOrUpdate(conferencex);


    //  alert("eliminado "+ index + " "+ id);
    };

    $scope.editar = function(conf){
      $scope.service.setCurrentConference(conf);
      $location.path('/edit');
    }

    $scope.buscar = function(){
      var confs = $scope.service.conferences;
      var nuevs = [];

      //alert($scope.searchy);
      if($scope.searchy){
        for(var i = 0; i < confs.length; i ++){
          var co = confs[i];
          if(co.name.indexOf($scope.searchy) > -1){
            nuevs.push(co);
          }
        }

      }else{
        nuevs = confs;
    }
      $scope.conferences = nuevs;
    }



  });
