// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hoss_app', ['ionic', 'backand', 'hoss_app.controllers', 'hoss_app.services', 'ngCookies'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function (BackandProvider) {
      BackandProvider.setAppName('greenstopdb');
      BackandProvider.setSignUpToken('98d2d7e5-97b1-4f74-a581-dd7dfc91b43d');
      BackandProvider.setAnonymousToken('5fd7e41f-224a-4127-b155-d8b878c7b3cb');
    })

    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('intro', {
                url: "/intro",
                templateUrl: "templates/intro.html",
                controller: 'IntroCtrl'
            })
            .state('product_menu', {
                url: "/product/menu/:cateId",
                templateUrl: "templates/app/product_menu.html",
                controller: 'ProductMenuCtrl'
            })
            .state('product_detail', {
                url: "/product/:productId",
                templateUrl: "templates/app/product_detail.html",
                controller: 'ProductDetailCtrl'             
            })            
            // MAIN APP
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/app/ion_nav_view.html",
                controller: "AppCtrl"
            })
            .state('app.category', {
                url: "/category",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/category.html"
                    }
                }
            })
            .state('app.shopping_cart', {
                url: "/shopping_cart",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/shopping_cart.html"
                    }
                }
            })
            .state('app.settings', {
                url: "/settings",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/settings.html"
                    }
                }
            })
            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/profile.html"
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/intro');
        $httpProvider.interceptors.push('httpInterceptor');

    })
