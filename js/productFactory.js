angular.module('mainDepend')
    .factory('productFactory', function(orderFactory) {

    console.log('Initializing Product Factory...');
    var factory = {};

    factory.products = [
        {name: 'Keyboard', price: 149.99, qty: 50},
        {name: 'Mouse', price: 29.99, qty: 50}
    ];

    //Factory Functions
    factory.getProducts = function() {
        return factory.products;
    };

    factory.addProduct = function(productName, productPrice) {
        if (productPrice % 1 ==0){
            productPrice = productPrice.toFixed(2);
        }
        var product = {name: productName, price: productPrice};
        orderFactory.initProduct(product);
        factory.products.push(product);
    };

    factory.deleteProduct = function(index) {
        factory.products.splice(index,1);
    }

    factory.purchaseProduct = function(index) {
        console.log(factory.products[index]);
        if(factory.products[index].qty <= 0){
            alert('Can not process order, insufficient quantity');
        }
        factory.products[index].qty += -1;

    }



    return factory;

});
