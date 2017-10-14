(function(){
'use strict';

angular.module('MenuApp')
  .component('itemList', {
    templateUrl: 'src/templates/items-template.html',
    bindings: {
      items: '<',
    },
  });

})();
