angular.module('hoss_app.controllers', ['backand', 'ngCookies'])

.controller('AppCtrl', function($scope, Cates, Products, Carts, $state) {
  $scope.products = [];
  $scope.input = {};
  $scope.cates = Cates.all();
  $scope.productData = {};

  $scope.carts = Carts.all();

  $scope.goBack = function () {
      window.history.back();
  };
 
  Products.GetProducts().then(function(products) {
      $scope.products = products;
  });

  $scope.addProduct = function() {
    Products.addProduct($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our todos, not super cool
      getAllProducts();
    });
  }
 
  $scope.deleteProduct = function(id) {
    Products.deleteProduct(id)
    .then(function (result) {
      // Reload our todos, not super cool
      getAllProducts();
    });
  }
 
})

.controller('IntroCtrl', function($scope, $ionicModal, Backand, $state, $http) {

  $ionicModal.fromTemplateUrl('templates/signup.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.modal = modal;
  });

    $scope.toggleItem = function(offer){
      offer.checked = !offer.checked;
    };

    $scope.offers = [
      { id: 1, title: "Subscribe for SMS Special Deals and Promotions", checked: false },
      { id: 2, title: "I Agree and Accept the Terms & Conditions of GreenStop LLC", checked: false }
    ];  


})



.controller('ProductMenuCtrl', function($scope, Products, $stateParams, $timeout, $state, Cates) {
    $scope.products = [];

  //  Products.GetProdByCate($stateParams.cateId).then(function(){
  //     $scope.products = products;
  // });

  function getCateProds() {
    Products.GetProdByCate($stateParams.cateId)
      .then(function() {
        $scope.products = products;
      });
  }

    $scope.doOrder = function() {
        $state.go("app.shopping_cart");
        $timeout(function() {
            $scope.closeModal();
        }, 1000);
    };

    // Click like product
    $scope.doLike = function() {
            var btn_like = angular.element(document.querySelector('.product-like'));
            btn_like.find('i').toggleClass('active');
        }
        // Open the product modal


    $scope.goBack = function() {
        window.history.back();
    };
    
    getCateProds();
})

.controller('ProductDetailCtrl', function($scope, Products, $stateParams, $timeout, $state, Cates) {
    // $scope.product = Products.GetProduct($stateParams.productId);
      $scope.product = {};

     function getProdDeets() {
    Products.GetProduct($stateParams.productId)
    .then(function () {
      $scope.product = product;
    });
  }

    $scope.doOrder = function() {
        $state.go("app.shopping_cart");
        $timeout(function() {
            $scope.closeModal();
        }, 1000);
    };

    // Click like product
    $scope.doLike = function() {
            var btn_like = angular.element(document.querySelector('.product-like'));
            btn_like.find('i').toggleClass('active');
        }
        // Open the product modal


    $scope.goBack = function() {
        window.history.back();
    };
    getProdDeets();
})