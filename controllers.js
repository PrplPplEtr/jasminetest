(function(){
	var app=angular.module('app', []);

	app.controller('PasswordController', function PasswordController($scope) {
		$scope.password = '';
		$scope.grade = function() {
			var size = $scope.password.length;
			if (size > 8) {
				$scope.strength = 'strong';
			} else if (size > 3) {
				$scope.strength = 'medium';
			} else {
				$scope.strength = 'weak';
			}
		};
	});
	

	app.controller('PanelsController', function PanelsController($scope) {
		this.activePanelIndex = 1;
		this.setActiveIndex=function(i){
			this.activePanelIndex=i;
		};
		this.isActive=function(i){
			return i===this.activePanelIndex;
		};
	});
	
})();