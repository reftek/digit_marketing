(function() {
    'use strict';

    angular
        .module('digit.shared')
        .directive('menuToggle', Directive);

    //Directive.$inject = ['$window'];
    /* @ngInject */
    function Directive() {
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
})();