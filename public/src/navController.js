angular.module("contactsApp")
    .controller("navCtrl", ['$scope', '$rootScope','service', function ($scope, $rootScope,service) {
       
        $scope.profileImage = function (contactId) {

        }

        service.callAPIMethod().then(
            function (res) {
                $scope.contacts = res.data.contacts;
                $scope.contactId = {};
                $scope.contactId = $scope.contacts.id;
                console.log($scope.contactId);
            },
            function (res) {
                console.log(res);
              
            });

        
    }])