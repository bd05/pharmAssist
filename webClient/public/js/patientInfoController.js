app.controller('patientInfoController', function($scope) {
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

});
