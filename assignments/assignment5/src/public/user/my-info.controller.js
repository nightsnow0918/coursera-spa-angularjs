(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath', 'regInfo', 'UserService'];
function MyInfoController(ApiPath, regInfo, UserService) {
  var $ctrl = this;

  $ctrl.basePath = ApiPath;
  $ctrl.userInfo = regInfo.userInfo;
  $ctrl.dishInfo = regInfo.dishInfo;
  $ctrl.registered = UserService.checkRegistered();
}

})();
