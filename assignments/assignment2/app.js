(function(){

    angular.module('ToBuyList', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService){
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.everythingIsBought = false;

        toBuy.onItemClick = function(index){
            ShoppingListCheckOffService.buyItem(index);
        }

        toBuy.everythingBought = function(){
            return ShoppingListCheckOffService.getToBuyItems().length == 0;
        }
    }


    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
        var bought = this; 

        bought.items = ShoppingListCheckOffService.getBoughtItems();
        bought.nothingBought = function(){
            return ShoppingListCheckOffService.getBoughtItems().length == 0;
        }
    }


    function ShoppingListCheckOffService(){
        var service = this;

        var toBuyList = [
                { name: "cookies", quantity: 10 },
                { name: "apple juice", quantity: 5 },
                { name: "chocolate", quantity: 8 },
                { name: "cakes", quantity: 20 },
                { name: "coffee", quantity: 300 },
            ];

        var boughtList = [];

        service.getToBuyItems = function(){
            return toBuyList;
        }

        service.getBoughtItems = function(){
            return boughtList;
        }

        service.buyItem = function(itemIndex){
            boughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1);
        }

    }

})();

