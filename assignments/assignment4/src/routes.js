(function(){

'use strict';

angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home-template.html',
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/category-list-template.html',
      controller: 'CategoriesController as categoryList',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }],
      },
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/itemlist-template.html',
      controller: 'ItemListController as itemList',
      resolve: {
        items: ['MenuDataService', '$stateParams',
                function(MenuDataService, $stateParams){
                  var shortName = $stateParams.categoryShortName;
                  console.log('shortName=', shortName);
                  return MenuDataService.getItemsForCategory(shortName);
                }],
      },
    })

}

})();
