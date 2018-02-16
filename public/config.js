angular.module('contactsApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("contactdetails");
        $stateProvider
            //All Contacts screen
            .state('allcontacts', {
                url: "/allcontacts",
                templateUrl: "views/all-contacts.html",
            })
            //contact dtails screen
            .state('contactdetails', {
                url: "/contactdetails:id",
                templateUrl: "views/contact-details.html",

            })
    });