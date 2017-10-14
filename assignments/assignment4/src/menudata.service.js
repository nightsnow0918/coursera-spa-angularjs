(function(){
'use strict';

angular.module('data')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http){

  var service = this;
  var categoryList = [];

  service.getAllCategories = function(){
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/categories.json',
      method: 'GET',
    }).then(function(result){
      return result.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName){
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      method: 'GET',
      params: {
        category: categoryShortName,
      },
    }).then(function(result){
      console.log("getItemsForCategory=", result.data.menu_items);
      return result.data.menu_items;
    });
  };

}

})();
