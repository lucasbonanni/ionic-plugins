angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaVibration, $cordovaNativeAudio, $timeout, $cordovaFlashlight) {
      

    /*
        $cordovaNativeAudio
        .preloadSimple('click', "/src/reload-mp3.mp3")
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
*/

      $scope.soundPlay = function(){
        try {
                $cordovaNativeAudio
        .preloadComplex('music', "src/reload-mp3.mp3", 1, 1)
        .then(function (msg) {
          console.log(msg);
          alert(msg);
        }, function (error) {
          console.error(error);
          alert(error);
        });

          $cordovaNativeAudio.play('music');
          
        }
        catch(error){
          $scope.soundError = error;
        }

      };


      $scope.flashon = function(){
        alert('llega funcion');
        try {
            $cordovaFlashlight.switchOn().then(
              function (success) { alert(success); },
              function (error) { alert(error); }
              );
        }
        catch(error){
          $scope.flashError = error;
          alert(error);
        }
         
      };

      $scope.flashoff = function(){
        try{
          $cordovaFlashlight.switchOff();
        }
        catch(error){
          $scope.flashError = error;
        }
          
      };

      $scope.vibrate = function(){ 
        try{
           $cordovaVibration.vibrate([100,50,200,50,100]);   
        }
         catch(error){
            console.log('La vibración solo disponible para celulares');
         }

        
      };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
