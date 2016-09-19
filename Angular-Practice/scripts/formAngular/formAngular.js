﻿var app = angular.module("formApp", []);

app.controller("formController", function ($scope) {

    $scope.user = {
        firstName: "John Alexander",
        lastName: "Thompson",
        myEmail: "johnThompson2@gmail.com",
        myPassword: "aBc123ABc2000",
        myTelephone: "07673307272",
        myURL: "http://JohnThomp83.blogspot.co.uk",
        descriptionSection: "Hello, my name is John Alexander Thompson and I am 33 years old. I am an American-Canadian citizen that currently lives in Belfast, Northern Ireland and is looking for a job as a web developer. I speak French and Spanish at a professional level and German at an intermediate one."
    };

    $scope.Regions = [
       {
           Id: 1,
           Name: "Select your area",
           Selected: true
       }, {
           Id: 2,
           Name: "European Union",
           Selected: false
       }, {
           Id: 3,
           Name: "UK/Ireland",
           Selected: false
       }, {
           Id: 4,
           Name: "United States",
           Selected: false
       }, {
           Id: 5,
           Name: "Canada",
           Selected: false
       }, {
           Id: 6,
           Name: "Australia/New Zealand",
           Selected: false
       }, {
           Id: 7,
           Name: "Africa",
           Selected: false
       }, {
           Id: 8,
           Name: "Asia",
           Selected: false
       },
    ];

    $scope.show = true;

    $scope.formShow = function formShow() {
        $scope.show = true;
    }

    $scope.formHide = function formHide() {
        $scope.show = false;
    }

    $scope.formToggle = function formToggle() {
        $scope.show = !$scope.show;
    }

});