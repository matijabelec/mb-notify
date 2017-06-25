(function () {
  'use strict';

  angular
    .module('mbNotify', ['ngAnimate'])
    .factory('NotifyService', ['$animate', '$document', '$compile', '$rootScope', '$timeout',
    function ($animate, $document, $compile, $rootScope, $timeout){
      var body = angular.element(document.querySelector('#notify-container'));
      function NotifyService(){
        var self = this;

        var appendChild = function(parent, child){
          var children = parent.children();
          if(children.length > 0){
            return $animate.enter(child, parent, children[children.length-1]);
          }
          return $animate.enter(child, parent);
        };

        self.notify = function(message, options){
          var notifyScope = $rootScope.$new();
          var options = options || {};
          var type = options.type || null;
          var delay = options.delay || 4000;
          var message = message || '';
          var linkFn = $compile('<div class="notification{{classtype}}"><button class="delete" ng-click="close()"></button>{{ message }}</div>');
          var element = linkFn(notifyScope);

          var hideNotification = function(){
            if(element){
              $animate.leave(element)
              .then(function(){
                notifyScope.$destroy();
                element = null;
                message = null;
              });
            }
          };

          var types = {
            'success': ' is-success',
            'warning': ' is-warning',
            'error': ' is-danger',
          };
          notifyScope.classtype = (type && angular.isDefined(types[type]) ? types[type] : '');
          notifyScope.message = message;
          notifyScope.close = function(){ hideNotification(); };

          appendChild(body, element);
          $timeout(hideNotification, delay);
        };

        self.success = function(message, options){
          options = options || {};
          options.type = 'success';
          self.notify(message, options);
        };

        self.warning = function(message, options){
          options = options || {};
          options.type = 'warning';
          self.notify(message, options);
        };

        self.error = function(message, options){
          options = options || {};
          options.type = 'error';
          self.notify(message, options);
        };
      }

      return new NotifyService();
    }])
    ;

}());
