app.controller('patientPrescController', function($scope) {
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

});
