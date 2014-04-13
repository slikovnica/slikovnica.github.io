'use strict';

var funBooksCtrl = angular.module('funBooksCtrl', ['ngSanitize']);

funBooksCtrl.controller('mainCtrl', [ '$rootScope', '$scope', function($rootScope,$scope) {
	$scope.items = [1, 2, 3, 4, 5];
	$scope.pages = [
		{text:"Градот убав пак ќе никне, среде песни в дружен фат, пак ко сонце цел ќе бликне, како топол нежен кат."},
		{text:"Скопје младост ти ќе бидеш, Скопје ти ќе бидеш цвет, и ќе бидеш израз свиден, на сè братско в овој свет."},
		{text:"Скопје младост ти ќе бидеш, Скопје ти ќе бидеш цвет, и ќе бидеш израз свиден, на сè братско в овој свет."},
		{text:"Покрај Вардар ќе се крене, ќе го буди детски вик, и ќе брои ново време, радост ќе му краси лик."},
		{text:"Скопје младост ти ќе бидеш, Скопје ти ќе бидеш цвет, и ќе бидеш израз свиден, на сè братско в овој свет."}
	];

	$scope.selection = $scope.items[0];	

	$scope.page = $scope.pages[$scope.selection-1];

	$scope.$watch('selection', function(newSelection, oldSelection) {
		$scope.page = $scope.pages[newSelection-1];
	});

}]);
