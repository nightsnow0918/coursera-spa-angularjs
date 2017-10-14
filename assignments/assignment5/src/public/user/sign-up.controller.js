(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;

  $ctrl.userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    favoriteDish: "",
  },

  $ctrl.onSubmit = function(){
    var userInfo = $ctrl.userInfo;

    if(userInfo.favoriteDish){
      MenuService.getMenuItem(userInfo.favoriteDish).then(function(dishInfo){
        UserService.setUserInfo(userInfo, dishInfo);
        $ctrl.completed = true;
        $ctrl.dishError = false;
        //console.log("Saved Info:", UserService.getUserInfo());
      }, function(failure){
        $ctrl.completed = false;
        $ctrl.dishError = true;
      });
    }

  };
}

})();
