(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

UserService.$inject = [];
function UserService(){

  var service = this;
  var regInfo = {};
  var registered = false;

  service.getUserInfo = function(){
    if(regInfo !== {}){
      return regInfo;
    }
    else{
      return false;
    }
  };

  service.setUserInfo = function(userInfo, dishInfo){
    regInfo.userInfo = userInfo;
    regInfo.dishInfo = dishInfo;
    registered = true;

    console.log("regInfo=", regInfo);
  };

  service.checkRegistered = function(){
    return registered;
  }
}

})();
