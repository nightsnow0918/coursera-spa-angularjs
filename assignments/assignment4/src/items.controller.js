(function(){
'use strict';

angular.module('MenuApp')
  .controller('ItemListController', ItemListController);

ItemListController.$inject = ['$stateParams', 'items'];
function ItemListController($stateParams, items){
  var itemList = this;
  itemList.categoryName = $stateParams.categoryShortName;
  itemList.items = items;
}

})();
