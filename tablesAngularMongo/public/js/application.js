// File: application.js
var app = angular.module('app', ['ui.router', 'xeditable']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

//photon
var deviceID    = "1a003a001247343339383037";
var accessToken = "d049cd8a80da947956c2421bc3bb5ae2fbf34d5e";
var setFunc = "setVal";
var getFunc = "getVal";

app.factory( getFunc, function($resource) {
  return $resource("https://api.spark.io/v1/devices/" + deviceID + "/" + getFunc + "/?access_token=" + accessToken);
})

//end photon

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/pages/page-home.html'
        })
             .state('home.list', {
         url: '/list',
         templateUrl: '../views/pages/page-home-list.html',
         controller: ['$scope', function($scope) {
            $scope.posts = [
               {id: 1, name: "WCG Post 1"},
               {id: 2, name: "WCG Post 2"},
               {id: 3, name: "WCG Post 3"},
               {id: 4, name: "WCG Post 4"},
               {id: 5, name: "WCG Post 5"},
            ]   
         }]
     })
     .state('home.info', {
         url: '/info',
         template: 'Posts information. We are using directly a string template instead of a url linking to a template.'
     });

//drug inventory
 $stateProvider
    .state('inventory', {
         url: '/inventory',
         views: {
            '': { templateUrl: '../views/pages/inventory.html' },

            'columnOne@inventory': { 
                templateUrl: '../views/pages/inventory-list.html',
                controller: 'drugController'
            }
        }
 });


//doctor directory
 $stateProvider
    .state('doctors', {
         url: '/doctors',
         views: {
            '': { templateUrl: '../views/pages/doctors.html' },
            'columnOne@doctors': { 
                templateUrl: '../views/pages/doctors-list.html',
                controller: 'docController'
            }
        }
 });

//selected patient
 $stateProvider
    .state('patient', {
         //state. This state will contain multiple views
         url: '/patient',
         views: {
            // the main template will be placed here (relatively named)
            '': { templateUrl: '../views/pages/patient.html' },

            'columnOne@patient': { 
                templateUrl: '../views/pages/patient-list-prescriptions.html',
                controller: 'patientPrescController'
            },

            //patient info table
            'info@patient': { 
                templateUrl: '../views/pages/patient-list-info.html',
                 controller: 'patientInfoController' 
            }
        }
 });

//patient directory
 $stateProvider
    .state('patientDirectory', {
         url: '/patientDirectory',
         views: {
            '': { templateUrl: '../views/pages/patientDirectory.html' },

            'columnOne@patientDirectory': { 
                templateUrl: '../views/pages/patientDirectory-list.html',
                controller: 'patientDirController'
            }
        }
 });


}); //end app.config()
