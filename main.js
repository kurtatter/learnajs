let app = angular.module('app', []);

app.factory('UserFactory', function () {
    return {
        name: 'Sam Flynn'
    }
});

app.directive('hawaii', function () {
    return function (scope, element, attrs) {
        element.text('Hawaii');
        element.on('click', function () {
            element.text(element.text() === 'Hawaii' ? 'USA' : 'Hawaii');
        });
    };
});

app.directive('london', function() {
    return {
        link: function (scope, element, attrs) {
            element.text('London');
            element.on('click', function() {
                element.text(element.text() === 'London' ? 'England' : 'London');
            });
        }
    };
});

app.filter('moneyFilter', function () {
    return function (str) {
        return '$' + str;
    };
});

app.directive('currentDatetime', function () {
    return {
        restrict: 'EACM',
        link: function (scope, element, attrs) {
            console.log(Date());
            element.text(Date())
        }
    }
});

app.controller('travelCtrl', function (UserFactory) {
    this.price = 99;
    this.UserFactory = UserFactory;
});
