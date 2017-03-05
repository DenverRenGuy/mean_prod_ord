angular.module('mainDepend', [])
    .controller('productCtrl', function($scope, productFactory){
    console.log('Initializing Product Controller...');
    $scope.products = [];

    $scope.getProducts = function(){
        $scope.products = productFactory.getProducts();
        console.log($scope.products);
        return $scope.products;
    };

    $scope.removeProduct = function(index) {
        productFactory.deleteProduct(index);
        $scope.getProducts();
    }

    $scope.addProduct = function() {
        if(!$scope.productName) return;
        productFactory.addProduct($scope.productName, $scope.productPrice);

        //Clear Form
        $scope.produceName = '';
        $scope.productPrice = '';
        $scope.getProducts();
    }



});
