angular.module('contactsApp')
    .service('service', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {

        this.callAPIMethod = function () {
            var deferred = $q.defer();
            $http.get("./ContactsList.json").then(function (response) {
                deferred.resolve(response);

            }, function (response) {
                console.log(response);
                deferred.reject("Unable to retrieve details.error" + response);
            });

            return deferred.promise;
        }
    }])

