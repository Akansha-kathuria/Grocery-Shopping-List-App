// Angular ka cahe se swagat karna
//pehli chiz jo hum yha par ;ikhte hai wo hai hmari app ka naam
//We are also defining avariable here as well name is "foodieApp"
//angular.module is a function where we have passed two paramters here ("one is App name", [second is empy array,, imfutre classe we will give some extra powrs])
var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) { //$routeProvider is an oject which is already defined in ngRoute
$routeProvider
.when('/',{ // when is a function it uses two parmeters ... 1. (/) which tells the url of the or the domain name 2. is konse tempalte ka vew dikhana hai and kon se contoller ko control krna hai
templateUrl: 'pages/login.html',
controller: 'loginController'
})
.when('/home',{
templateUrl: 'pages/main.html',
controller: 'mainController'
})
})
//conole.log(foodieApp);
//Hmne yha pe controller islie bnaya kyuki jb hmne upar wali kine ke lie conole.log(foodiApp); kia tha to usme ek controller aya object ke under to that means hum controller bna skte hai

//.controller we have used for creating a controller..mainController is a name od controller
foodieApp.controller('mainController',function($scope) {
  //whatever controller will do we will write here
  //Yha pe scope kya hai scope hmare model hai...scope ka kamm hai data store krna ..or date handle karna
  $scope.restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Pizza Hut',
    address: '2518, Hudson Lane, Kingsway Camp, Delhi University-GTB',
    location: 'Delhi University-GTB Nagar',
    vote: '5.4',
    cuisines: 'Italian, Pizza, Fast Food',
    cost: '1000',
    hours: '11 AM to 11 PM (Mon-Sun)',
    Promotions: '20% off on Axis Bank Credit & Debit Cards',
    image: 'http://paypizzapal.com/wp-content/uploads/2014/01/pizza-hut2.jpg'
  }]

})
