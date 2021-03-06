﻿function routeSetup($routeProvider) {
    $routeProvider
    .when("/bus104", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/bus104.html",
        controller: "bus104controller"
    })
    .when("/bus131", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/bus131.html",
        controller: "bus131controller"
    })
    .when("/bus205", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/bus205.html",
        controller: "bus205controller"
    })
    .when("/bus301", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/bus301.html",
        controller: "bus301controller"
    })
    .when("/bus336", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/bus336.html",
        controller: "bus336controller"
     })
    .when("/error", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    });
}

routeSetup.$inject = ["$routeProvider"];