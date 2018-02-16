angular.module("contactsApp")
    .controller("detailsCtrl", ['$scope', '$rootScope', '$stateParams', 'service', function ($scope, $rootScope, $stateParams, service) {
        $scope.contactId = $stateParams.id;
        service.callAPIMethod().then(
            function (res) {
                $scope.contacts = res.data.contacts;

                $scope.loadDetails($scope.contactId);
            },
            function (res) {
                console.log(res);

            });
        
        $scope.loadDetails = function (num) {
            
            if (!num) {
                $scope.desc = $scope.contacts[0].desc;
                $scope.likes = $scope.contacts[0].likes;
                $scope.dislikes = $scope.contacts[0].dislikes;
                $scope.profileImg = "media/" + $scope.contacts[0].pic;
                $scope.rating = $scope.contacts[0].rating;
                $scope.contactRatings = $scope.calcSolidHearts();
                $scope.noRatings = $scope.calcEmptyHearts();
            }
                
            else {
                $scope.desc = $scope.contacts[$scope.contactId - 1].desc;
                $scope.likes = $scope.contacts[$scope.contactId - 1].likes;
                $scope.dislikes = $scope.contacts[$scope.contactId - 1].dislikes;
                $scope.profileImg = "media/" + $scope.contacts[$scope.contactId - 1].pic;
                $scope.rating = $scope.contacts[$scope.contactId - 1].rating;
                $scope.contactRatings = $scope.calcSolidHearts();
                $scope.noRatings = $scope.calcEmptyHearts();
                
                //$scope.calcRating($scope.rating);
            }
                
            
        }
        
        
        $scope.calcSolidHearts = function () {
            var givenRating = $scope.rating;
            if (givenRating > 5)
                givenRating = 5;
            var ratingArray = new Array(givenRating);
            for (var i = 0; i < givenRating; i++) {
                ratingArray[i] = i;
            }
            return ratingArray;
        }
        $scope.calcEmptyHearts = function (rating) {
            var emptyRating = 5 - $scope.rating;
            if (rating > 5)
                emptyRating = 0;
            if (emptyRating > 0) {
                var noRatingArray = new Array(emptyRating);
                for (var i = 0; i < emptyRating; i++) {
                    noRatingArray[i] = i;
                }
                return noRatingArray;

            }
        }
       

    }]);