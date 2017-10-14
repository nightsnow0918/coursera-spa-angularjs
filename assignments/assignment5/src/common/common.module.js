(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://nightsnow0918-coursera.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
