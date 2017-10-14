(function(){
'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItems)

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var ctrl = this;

        ctrl.searchItem = '';
        ctrl.found = '';
        ctrl.notfound = false;

        ctrl.narrowDown = function(){
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchItem);
            promise.then(function(res){
                if(ctrl.searchItem.length>0 && res.length>0){
                    ctrl.found = res;
                    ctrl.notfound = false;
                }
                else{
                    ctrl.found = '';
                    ctrl.notfound = true;
                }
            });
        }

        ctrl.removeItem = function(index){
            MenuSearchService.removeItem(index);
        }
    }   

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        var items = [];

        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json",
                method: "GET",
            }).then(function(result){
                var menu_items = result.data.menu_items;
                var foundItems = [];
                //console.log(result);
                
                if(searchTerm!=""){
                    for(var i=0; i<menu_items.length; i++){
                        var description = menu_items[i].description;
                        if(description.indexOf(searchTerm) !== -1){
                            console.log(description);
                            foundItems.push(description);
                        }
                    }
                }
                items = foundItems;
                return foundItems;
            }, function(error){
                console.log(error);
            });
        }

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        };
    }


    function foundItems(){
        var ddo = {
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&', 
            },
            template:
                '<div style="clear:left" ng-repeat="item in list.foundItems track by $index">' +
                    '{{ item }}' +
                    '<button class="btn btn-default narrow-button"' +
                            'ng-click="list.onRemove({index: $index});">' +
                        'Don\'t want this one!' +
                    '</button>' + 
                '</div>',

            controller: NarrowItDownController,
            controllerAs: 'list', 
            bindToController: true,
        };

        return ddo;
    }

})();
