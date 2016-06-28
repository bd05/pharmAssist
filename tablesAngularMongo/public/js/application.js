// File: application.js
var app = angular.module('app', ['ui.router', 'xeditable']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

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


 $stateProvider
     .state('authors', {
         // Authors state. This state will contain multiple views
         url: '/authors',
         views: {
            // Main template. It will be placed in the ui-view of the index.html file when /authors url is visited (relatively named)
            '': { templateUrl: '../views/pages/page-authors.html' },
            // popular child view. Absolutely named. It will be injected in the popular ui-view of authors state
            'popular@authors': {
               templateUrl: '../views/pages/view-popular-authors.html',
               controller: ['$scope', function($scope) {
                 $scope.authors = [
                    {name: 'John', surname: 'Benneth'},
                    {name: 'Anthony', surname: 'Horner'},
                    {name: 'James', surname: 'Blanch'},
                    {name: 'Harrison', surname: 'Williams'},
                 ];
               }]
            },
            // recent child view. Absolutely named. It will be injected in the recent ui-view of authors state
            'recent@authors': { template: 'No recent authors since last month' }
         }
   });

//drug inventory
 $stateProvider
    .state('inventory', {
         // Authors state. This state will contain multiple views
         url: '/inventory',
         views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: '../views/pages/inventory.html' },

            // the child views will be defined here (absolutely named)
            //'columnOne@inventory': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnOne@inventory': { 
                templateUrl: '../views/pages/inventory-list.html',
                // controller: 'scotchController'
                controller: ['$scope', function($scope) {
                 $scope.drugs = [
                        {
                            name: 'Example med 1',
                            din: 1111111,
                            description: 'Oral antibacterial.',
                            instructions: 'Once per day.'
                        },
                        {
                            name: 'Example med 2',
                            din: 2222222,
                            description: 'Painkiller',
                            instructions: 'Take one with each meal, three times a day.'
                        }
                 ];
               }]
            }
        }
 });


//doctor directory
 $stateProvider
    .state('doctors', {
         // Authors state. This state will contain multiple views
         url: '/doctors',
         views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: '../views/pages/doctors.html' },

            'columnOne@doctors': { 
                templateUrl: '../views/pages/doctors-list.html',
                controller: ['$scope', function($scope) {
                 $scope.doctors = [
                        {
                            name: 'Fernadette Deung',
                            clinic: 1765765,
                            phone: '123-4567-890',
                            address:'DoctorLand Rd, DoctorLand Province'
                        },
                        {
                            name: 'Fernadette Deung',
                            clinic: 1765765,
                            phone: '123-4567-890',
                            address:'DoctorLand Rd, DoctorLand Province'
                        }
                 ];
               }]
            }
        }
 });

//selected patient
 $stateProvider
    .state('patient', {
         // Authors state. This state will contain multiple views
         url: '/patient',
         views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: '../views/pages/patient.html' },

            'columnOne@patient': { 
                templateUrl: '../views/pages/patient-list-prescriptions.html',
                controller: ['$scope', function($scope) {
                 $scope.prescHistory = [
                        {
                            name: 'example med',
                            prescNum: 1765765,
                            DIN: '1111111',
                            doctor:'Dr.Spaceman',
                            quantity:'250g',
                            refill:'1x/month',
                            expiration: 'July 10, 2017',
                            instructions: 'take one with every meal'
                        },
                        {
                            name: 'example med',
                            prescNum: 1765765,
                            DIN: '2222222',
                            doctor:'Dr.Spaceman',
                            quantity:'250g',
                            refill:'1x/month',
                            expiration: 'July 10, 2017',
                            instructions: 'take one with every meal'
                        }
                 ];
               }]
            },

            //patient info table
            'info@patient': { 
                templateUrl: '../views/pages/patient-list-info.html',
                 controller: ['$scope', function($scope) {
                    $scope.sin = 1234567890;
                    $scope.address = '123 Example Ave, Example Province';
                    $scope.birth = '01/24/1988';
                    $scope.gender = 'M';
                    $scope.phoneHome = '123-4567-890(Home)';
                    $scope.phoneMobile = '555-4567-890(Mobile)';
                    $scope.allergies = 'like everything';
                    $scope.insurance = 'insurance company';
                  /*$scope.patientInfo = [
                         {
                             sin: 1234567890,
                             Address: '123 Example Ave, Example Province',
                             birth: '01/24/1988',
                             gender: 'M',
                             phoneHome: '123-4567-890(Home)',
                             phoneMobile: '555-4567-890(Mobile)',
                             allergies:'everything',
                             insurance: ' insurance company'
                         }
                  ];*/
                }]
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
                // controller: 'scotchController'
                controller: ['$scope', function($scope, $filter) {
                 $scope.patients = [
                        {
                            id: 1,
                            name: 'Fernadette Deung',
                            sin: 1765765,
                            gender: 'M',
                            birth: '01/24/1988',
                            phone: '123-4567-890'
                        },
                        {
                            id: 2,
                            name: 'Fernadette Deung',
                            sin: 1765765,
                            gender: 'M',
                            birth: '01/24/1988',
                            phone: '123-4567-890'
                        }
                 ];

                  // filter users to show - not sure what this does, but if it doesn't work you don't need it anyways
                  $scope.filterPatient = function(patient) {
                    return patient.isDeleted !== true;
                  };

                  // mark user as deleted - still need to be modified for yours
                  $scope.deletePatient = function(id) {
                    var filtered = $filter('filter')($scope.patients, {id: id});
                    if (filtered.length) {
                      filtered[0].isDeleted = true;
                    }
                  };

                  // add user
                  $scope.addPatient = function() {
                    $scope.patients.push({
                      id: $scope.patients.length+1,
                      name: '',
                      gender: '',
                      birth: '',
                      phone: ''
                    });
                  };

                  // cancel all changes
                  $scope.cancel = function() {
                    for (var i = $scope.patients.length; i--;) {
                      var patient = $scope.patients[i];    
                      // undelete
                      if (patient.isDeleted) {
                        delete patient.isDeleted;
                      }
                      // remove new 
                      if (patient.isNew) {
                        $scope.patients.splice(i, 1);
                      }      
                    };
                  };

                  // save edits - still need to be modified for yours
                  $scope.saveTable = function() {
                    var results = [];
                    for (var i = $scope.users.length; i--;) {
                      var user = $scope.users[i];
                      // actually delete user
                      if (user.isDeleted) {
                        $scope.users.splice(i, 1);
                      }
                      // mark as not new 
                      if (user.isNew) {
                        user.isNew = false;
                      }

                      // send on server
                      results.push($http.post('/saveUser', user));      
                    }

                    return $q.all(results);
                  };

               }] //end controller
            }
        }
 });


}); //end app.config()
