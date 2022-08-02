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

app.directive('way', function () {
    return {
        restrict: 'E',
        template: '<h4>I did it my way</h4><i>quote: {{ quote }}</i><br><br><b><i>songs:</i></b><br><div ng-repeat="song in songs">{{ song.title }}</div>',
        link: function (scope, element, attrs) {
            console.log('My way!');
            scope.quote = "That's life!";
            scope.songs = [
                {
                    id: 1,
                    title: 'That\'s life'
                },
                {
                    id: 2,
                    title: 'Fly me to the moon'
                },
                {
                    id: 3,
                    title: 'My way'
                },
                {
                    id: 4,
                    title: 'Strangers in the Night'
                }
            ];

        }
    }
});

app.directive('road', function () {
    return {
        restrict: 'E',
        template: '<strong>It is road, <ng-transclude></ng-transclude>!</strong>',
        transclude: true,
        link: function (scope, element, attrs, ctrl, transclude) {
            scope.is_song = true;
        }
    }
});

app.directive('dollar', function () {
    return {
        restrict: 'E',
        template: '<strong>$</strong>',
        transclude: true,
        link: function(scope, element, attrs, ctrl, transclude) {
            transclude (scope, function (clone, scope) {
                element.append(clone)
            })
        }
    }
})

app.controller('travelCtrl', function (UserFactory) {
    this.price = 99;
    this.UserFactory = UserFactory;
});
