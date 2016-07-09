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

//drug inventory
 $stateProvider
    .state('inventory', {
         url: '/inventory',
         views: {
            '': { templateUrl: '../views/pages/inventory.html' },

            'columnOne@inventory': { 
                templateUrl: '../views/pages/inventory-list.html',
                // controller: 'scotchController'
                controller: ['$scope', function($scope, $filter, $http) {
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

                $scope.addDoc = function(){
                          angular.element(document.querySelector('#tblData')).append(
                              "<tr>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='button' class='btn btn-info' id='btnSave' value='Save' ng-click='saveDoc($event)'></td>"+
                              "<td><p></p></td>"+
                              "</tr>");
                  }

                $scope.saveDoc = function(obj) {
                  console.log("save button does sth");
                      // var id = obj.target.attributes.id.value;
                      // console.log(id);
                      // var par = id.parentElement.parentElement; //tr
                      // console.log(par);
                      // var tdName = par.children("td:nth-child(1)");
                      // var tdClinic = par.children("td:nth-child(2)");
                      // var tdPhone = par.children("td:nth-child(3)");
                      // var tdAddress = par.children("td:nth-child(4)");
                      // var tdEditButton = par.children("td:nth-child(5)");
                      // var tdBlank = par.children("td:nth-child(6)");

                      // tdName.html(tdName.children("input[type=text]").val());
                      // tdClinic.html(tdClinic.children("input[type=text]").val());
                      // tdPhone.html(tdPhone.children("input[type=text]").val());
                      // tdAddress.html(tdAddress.children("input[type=text]").val());
                      // tdEditButton.html("<input type='button' class='btn btn-warning' id='btnEdit' value='Edit'>");
                      // tdBlank.html("<p></p>");
                  }

                $scope.editDoc = function($event) {
                    console.log("edit doc");
                    var par = $($event.target).parent().parent();
                    console.log(par);
                    var tdName = par.children("td:nth-child(1)");
                    var tdClinic = par.children("td:nth-child(2)");
                    var tdPhone = par.children("td:nth-child(3)");
                    var tdAddress = par.children("td:nth-child(4)");
                    var tdSaveButton = par.children("td:nth-child(5)");
                    var tdDeleteButton = par.children("td:nth-child(6)");

                  tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
                  tdClinic.html("<input type='text' id='txtClinic' value='"+tdClinic.html()+"'/>");
                  tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
                    tdAddress.html("<input type='text' id='txtAddress' value='"+tdAddress.html()+"'/>");
                  tdSaveButton.html("<input type='button' class='btn btn-success' id='btnSave' value='Save'>");
                  tdDeleteButton.html("<input type='button' class='btn btn-danger' id='btnDelete' value='Delete'>");
                }


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
                    // $scope.sin = 1234567890;
                    // $scope.address = '123 Example Ave, Example Province';
                    // $scope.birth = '01/24/1988';
                    // $scope.gender = 'M';
                    // $scope.phoneHome = '123-4567-890(Home)';
                    // $scope.phoneMobile = '555-4567-890(Mobile)';
                    // $scope.allergies = 'like everything';
                    // $scope.insurance = 'insurance company';
                   $scope.patientInfo =
                         {
                             sin: 1234567890,
                             address: '123 Example Ave, Example Province',
                             birth: '01/24/1988',
                             gender: 'M',
                             phoneHome: '123-4567-890(Home)',
                             phoneMobile: '555-4567-890(Mobile)',
                             allergies:'everything',
                             insurance: ' insurance company'
                         };

                  $scope.test = function(){
                    console.log("pls");
                  }

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

                  // // filter users to show - not sure what this does, but if it doesn't work you don't need it anyways
                  // $scope.filterPatient = function(patient) {
                  //   return patient.isDeleted !== true;
                  // };

                  // // mark user as deleted - still need to be modified for yours
                  // $scope.deletePatient = function(id) {
                  //   var filtered = $filter('filter')($scope.patients, {id: id});
                  //   if (filtered.length) {
                  //     filtered[0].isDeleted = true;
                  //   }
                  // };

                  // // add user
                  // $scope.addPatient = function() {
                  //   $scope.patients.push({
                  //     id: $scope.patients.length+1,
                  //     name: '',
                  //     gender: '',
                  //     birth: '',
                  //     phone: ''
                  //   });
                  // };

                  // // cancel all changes
                  // $scope.cancel = function() {
                  //   for (var i = $scope.patients.length; i--;) {
                  //     var patient = $scope.patients[i];    
                  //     // undelete
                  //     if (patient.isDeleted) {
                  //       delete patient.isDeleted;
                  //     }
                  //     // remove new 
                  //     if (patient.isNew) {
                  //       $scope.patients.splice(i, 1);
                  //     }      
                  //   };
                  // };

                  // // save edits - still need to be modified for yours
                  // $scope.saveTable = function() {
                  //   var results = [];
                  //   for (var i = $scope.users.length; i--;) {
                  //     var user = $scope.users[i];
                  //     // actually delete user
                  //     if (user.isDeleted) {
                  //       $scope.users.splice(i, 1);
                  //     }
                  //     // mark as not new 
                  //     if (user.isNew) {
                  //       user.isNew = false;
                  //     }

                  //     // send on server
                  //     results.push($http.post('/saveUser', user));      
                  //   }

                  //   return $q.all(results);
                  // };

               }] //end controller
            }
        }
 });


}); //end app.config()
