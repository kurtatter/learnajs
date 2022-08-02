let app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
    $scope.posts = [];
    $scope.name = 'Main Controller'
});

app.directive('post', function () {
    return {
        scope: true, // использовать свой внутренний scope, а не scope контроллера в котором он инициализирован
        link: function (scope, element, attrs, ctrl, transparent) {
            console.log('scope', scope);
            scope.name = 'post directive'
        }
    }
})
