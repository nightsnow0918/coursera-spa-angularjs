(function(){

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', lunchCheckController);

    lunchCheckController.$inject = ['$scope'];

    function lunchCheckController($scope){
        $scope.yourLunch = '';
        $scope.message = '';
        $scope.messageStyle = {};
        $scope.textboxStyle = {};

        $scope.displayResult = function(num_of_items){
            if(num_of_items == 0){
                $scope.message = 'Please enter data first';
                $scope.messageStyle = {
                    'color': 'red',
                };
                $scope.textboxStyle = {
                    'border': '1px solid red',
                };
            }
            else if(num_of_items <= 3){
                $scope.message = 'Enjoy!';
                $scope.messageStyle = {
                    'color': 'green',
                };
                $scope.textboxStyle = {
                    'border': '1px solid green',
                };
            }
            else{
                $scope.message = 'Too Much!';
                $scope.messageStyle = {
                    'color': 'green',
                };
                $scope.textboxStyle = {
                    'border': '1px solid green',
                };
            }
        };

        $scope.checkLunch = function(){
            var lunches = $scope.yourLunch.split(',');
            lunches = lunches.filter( function(item){ 
                return item.trim() != ""; 
            });

            $scope.displayResult(lunches.length);
        };
    }

})();
