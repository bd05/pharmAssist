app.controller('drugController', function($scope, $filter, $http) {
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
});
