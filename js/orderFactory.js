angular.module('mainDepend')
    .factory('orderFactory', function(){

        console.log('Initializing Order Factory');

        var factory = {};

        factory.initProduct = function(product) {
            product.qty = 50;
            return product;
        }

        factory.getOrders = function() {
            factory.orders = productFactory.getProducts();
            return factory.orders;
        }


        return factory;
});
