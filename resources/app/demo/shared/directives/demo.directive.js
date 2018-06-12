angular.module('app.demo').directive('loading', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function(scope, element, attr) {
            scope.$watch('loading', function(val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
    };
});
angular.module('app').directive('fixedTableHeaders', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          $timeout(function() {
              var container = element.parentsUntil(attrs.fixedTableHeaders);
              element.stickyTableHeaders({ scrollableArea: container, "fixedOffset": 2 });
          }, 0);
        }
      };
    }] );
