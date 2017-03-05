angular.module('mainDepend')
    .controller('orderCtrl', function($scope, orderFactory, productFactory) {

        console.log('Initializing Order Controller...');

        $scope.orders = [];

        $scope.getProducts = function() {
            $scope.orders = productFactory.getProducts();
            console.log($scope.orders);
            return $scope.orders;
        }

        $scope.purchaseOrder = function(index) {
            productFactory.purchaseProduct(index);
        }

});
