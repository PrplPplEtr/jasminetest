(function(){
	var app=angular.module('DirectiveTest', []);
	
	app.directive('aGreatEye', function () {
	    return {
	        restrict: 'E',
	        replace: true,
	        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
	    };
	});
})();