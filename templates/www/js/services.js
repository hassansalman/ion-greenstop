var app = angular.module('hoss_app.services',[])

  app.service('httpInterceptor', function($q, $log, $cookieStore) {
    return {
      request: function(config) {
        config.headers['Authorization'] = $cookieStore.get('backand_token');
        return config;
      }
    };
  });

// app.service('LoginService', function (Backand) {

//     signin = function (email, password, appName) {
//         //call Backand for sign in
//         return Backand.signin(email, password);
//     };

//     anonymousLogin= function(){
//         // don't have to do anything here,
//         // because we set app token att app.js
//     }

//     signout = function () {
//         return Backand.signout();
//     };
// });

// app.service('LoginService', function (Backand) {
//       var service = this;

//       service.signin = function (email, password, appName) {
//           //call Backand for sign in
//           return Backand.signin(email, password);
//       };

//       service.anonymousLogin= function(){
//           // don't have to do anything here,
//           // because we set app token att app.js
//       }

//       service.socialSignIn = function (provider) {
//           return Backand.socialSignIn(provider);
//       };

//       service.socialSignUp = function (provider) {
//           return Backand.socialSignUp(provider);

//       };

//       service.signout = function () {
//           return Backand.signout();
//       };

//       service.signup = function(firstName, lastName, email, password, confirmPassword){
//           return Backand.signup(firstName, lastName, email, password, confirmPassword);
//       }
//   })

// app.service('AuthService', function($http, Backand){

//     var self = this;
//     var baseUrl = Backand.getApiUrl() + '/1/objects/';
//     self.appName = 'greenstopdb';
//     self.currentUser = {};

//     loadUserDetails();

//     function loadUserDetails() {
//         self.currentUser.name = Backand.getUsername();
//         if (self.currentUser.name) {
//             getCurrentUserInfo()
//                 .then(function (data) {
//                     self.currentUser.details = data;
//                 });
//         }
//     }

//     self.getSocialProviders = function () {
//         return Backand.getSocialProviders()
//     };

//     self.socialSignIn = function (provider) {
//         return Backand.socialSignIn(provider)
//             .then(function (response) {
//                 loadUserDetails();
//                 return response;
//             });
//     };

//     self.socialSignUp = function (provider) {
//         return Backand.socialSignUp(provider)
//             .then(function (response) {
//                 loadUserDetails();
//                 return response;
//             });
//     };

//     self.setAppName = function (newAppName) {
//         self.appName = newAppName;
//     };

//     self.signIn = function (username, password, appName) {
//         return Backand.signin(username, password, appName)
//             .then(function (response) {
//                 loadUserDetails();
//                 return response;
//             });
//     };

//     self.signUp = function (firstName, lastName, username, password, parameters) {
//         return Backand.signup(firstName, lastName, username, password, password, parameters)
//             .then(function (signUpResponse) {

//                 if (signUpResponse.data.currentStatus === 1) {
//                     return self.signIn(username, password)
//                         .then(function () {
//                             return signUpResponse;
//                         });

//                 } else {
//                     return signUpResponse;
//                 }
//             });
//     };

//     self.changePassword = function (oldPassword, newPassword) {
//         return Backand.changePassword(oldPassword, newPassword)
//     };

//     self.requestResetPassword = function (username) {
//         return Backand.requestResetPassword(username, self.appName)
//     };

//     self.resetPassword = function (password, token) {
//         return Backand.resetPassword(password, token)
//     };

//     self.logout = function () {
//         Backand.signout().then(function () {
//             angular.copy({}, self.currentUser);
//         });
//     };

//     function getCurrentUserInfo() {
//         return $http({
//             method: 'GET',
//             url: baseUrl + "users",
//             params: {
//                 filter: JSON.stringify([{
//                     fieldName: "email",
//                     operator: "contains",
//                     value: self.currentUser.name
//                 }])
//             }
//         }).then(function (response) {
//             if (response.data && response.data.data && response.data.data.length == 1)
//                 return response.data.data[0];
//         });
//     }

// });


app.factory('Cates', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cates = [{
    id: '0',
	class: 'item-1',
	img: 'img/category/7.jpg',
    name: 'Flowers',
    lastText: 'Find Deals On Nearby Flowers'
  }, {
    id: '1',
	class: 'item-2',
	img: 'img/category/13.jpg',
    name: 'Concentrates',
    lastText: 'Explore the Depths of Reality'
  }, {
    id: '2',
	class: 'item-3',
	img: 'img/category/8.jpg',
    name: 'Edibles',
    lastText: 'All You Can Eat!'
  }, {
    id: '3',
	class: 'item-4',
	img: 'img/category/12.jpg',
    name: 'Topicals',
    lastText: 'From Soap to Chapstick..'
  }, {
    id: '4',
	class: 'item-5',
	img: 'img/category/11.jpg',
    name: 'Gear',
    lastText: 'Chargers, Pipes, Grinders..'
  }];

  return {
    all: function() {
      return cates;
    },
    get: function(cateId) {
      for (var i = 0; i < cates.length; i++) {
        if (cates[i].id === parseInt(cateId)) {
          return cates[i];
        }
      }
      return null;
    }
  };
});

app.service('LoginService', function (Backand) {
        var service = this;

        service.signin = function (email, password, appName) {
            //call Backand for sign in
            return Backand.signin(email, password);
        };

        service.anonymousLogin= function(){
            // don't have to do anything here,
            // because we set app token att app.js
        }
});
// app.service('DatabaseService', function($http, Backand){    

//   var baseUrl = '/1/object/data/';

//   return {

//     // read all rows in the object
//       readAll: function(objectName) {  
//         return $http({
//           method: 'GET',
//           url: Backand.getApiUrl() + baseUrl + objectName
//        }).then(
//       function(response) {
//           return response.data.data;
//         });
//       },

//     // read one row with given id
//       readOne: function(objectName, id) {
//       return $http({
//         method: 'GET',
//         url: Backand.getApiUrl() + baseUrl + self.objectName 
//             + '/' + id
//       }).then(
//         function(response) {
//           return response.data;
//         });
//       }
//   };
// });

// app.service('Products', function ($http, Backand) {
//   var baseUrl = '/1/objects/';
//   var objectName = 'products/';
 
//   function getUrl() {
//     return Backand.getApiUrl() + baseUrl + objectName;
//   }
 
//   function getUrlForId(id) {
//     return getUrl() + id;
//   }

//   getProducts = function () {
//     return $http.get(getUrl());
//   };

//   addProduct = function(item) {
//     return $http.post(getUrl(), item);
//   }

//   getList = function (cateId) {
//   	var pageSize = 20;
//   	    pageNumber = 1;
//   	    filter = {"fieldName":"cateId","operator":"equals","value":cateId};
//   	    sort = {"fieldName":"cateId","order":"desc"};
//      return $http({
//           method: 'GET',
//           url: Backand.getApiUrl() + '/1/objects/' + 'products/',
//           params: {
//             pageSize: pageSize,
//             pageNumber: pageNumber,
//             sort: sort,
//             filter: filter
//           }
//       });
//   };

//   getDetails = function (id) {
//     return $http.get(getUrlForId(id));
//   };

//   deleteProduct = function (id) {
//     return $http.delete(getUrlForId(id));
//   };
 
//   return {
//     getProducts: getProducts,
//     addProduct: addProduct,
//     getList: getList,
//     getDetails: getDetails,
//     deleteProduct: deleteProduct
//   }
// });


app.factory('Products', function ($http, Backand) {
    var baseUrl = '/1/objects/';
        objectName = 'products/';
        products = []; //Private Variable
        bkndURL = Backand.getApiUrl() + baseUrl + objectName;
        product = {};

    return {
        GetProducts: function(){ 
            return $http.get(bkndURL).then(function(response){
                products = response.data.data;
                return products;
            });
        },

        GetProdByCate: function(cateId){ 
           var filter = "?filter=%7B%22fieldName%22:%22cateId%22,%22operator%22:%22equals%22,%22value%22:%22" + cateId + "%22%7D&pageNumber=1&pageSize=20&sort=%7B%22fieldName%22:%22cateId%22,%22order%22:%22desc%22%7D";
            return $http.get(bkndURL + filter).then(function(response){
              products = response.data.data;
              return products;
            });

        },

        GetProduct: function(productId){
          return $http.get(bkndURL + productId).then(function(response){
            product = response.data;
            return product;
          });
        }
    }
});


app.service('Carts', function() {
	var carts = [{
		id: 0,
		cateId: 0,
		img: 'img/product/thumb1.jpg',
		imgLg: 'img/product/1.jpg',
		name: 'Triple OG Kush',
		price: '$40.00',
		qty: '3.5'
	}, {
		id: 8,
		cateId: 1,
		img: 'img/product/thumb9.jpg',
		imgLg: 'img/product/9.jpg',
		name: 'King Kong OG',
		price: '$75.00',
		qty: '7'
	}, {
		id: 13,
		cateId: 1,
		img: 'img/product/thumb14.jpg',
		imgLg: 'img/product/14.jpg',
		name: 'Wiz Khalifa OG',
		price: '$20.00',
		qty: '0.5'
	}];
	return {
		all: function() {
			return carts;
		}
	};
});

