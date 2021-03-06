'use strict';

var funBooksCtrl = angular.module('funBooksCtrl', ['ngSanitize']);

funBooksCtrl.controller('mainCtrl', [ '$rootScope', '$scope', function($rootScope, $scope) {
	$scope.pages = [
		{text:"Градот убав пак ќе никне, среде песни в дружен фат, пак ко сонце цел ќе бликне, како топол нежен кат.",
		timestamp:[5.506,6.026,7.586,7.919,8.150,9.530,10.169,11.196,11.298,12.290,14.214,15.023,15.281,15.580,15.777,16.219,18.313,19.346,20.407,20.529]},
		{text:"Скопје младост ти ќе бидеш, Скопје ти ќе бидеш цвет, и ќе бидеш израз свиден, на сè братско в овој свет.",
		timestamp:[22.405,23.710,24.173,24.444,24.825,26.756,27.789,28.115,28.278,28.876,30.916,31.623,31.922,32.411,33.064,34.858,35.973,36.327,36.626,36.950,36.979]},
		{text:"Скопје младост ти ќе бидеш, Скопје ти ќе бидеш цвет, и ќе бидеш израз свиден, на сè братско в овој свет.",
		timestamp:[38.405,40.210,40.673,40.944,41.325, 43.256,44.289,44.615,44.778,45.376,47.416,48.123,48.422,48.911,49.564,51.358,52.473,52.827,53.126,53.450,53.479]},
		{text:"Покрај Вардар ќе се крене, ќе го буди детски вик, и ќе брои ново време, радост ќе му краси лик.",
		timestamp:[60.309,61.070,62.212,62.566,62.892,64.333,64.659,65.013,65.992,66.971,68.983,69.744,69.989,70.505,71.104,73.088,74.149,74.421,74.747,75.291]},
		{text:"Скопје младост ти ќе бидеш, Скопје ти ќе бидеш цвет, и ќе бидеш израз свиден, на сè братско в овој свет.",
		timestamp:[77.221,78.255,78.880,79.150,79.397,81.463,82.388,82.714,82.900,83.400,85.433,86.249,86.480,87.173,87.309,87.527,89.512,90.287,90.599,91.116,91.524]}
	];

	$scope.selection = 1;	

	$scope.page = $scope.pages[$scope.selection-1];

	$scope.wordIndex = 1;

	$scope.$watch('bookAudio.currentTime', function(newTime, oldTime) {
		if($scope.selection === 5 ){
			var timestamp = $scope.page.timestamp;
			if(newTime > (timestamp[timestamp.length-1]+3) ){
				$scope.bookAudio.stop();
				console.log(newTime, timestamp[timestamp.length-1])
			}
		} else {
			if(newTime > $scope.pages[$scope.selection].timestamp[0]){
				$scope.selection++;
				$scope.page = $scope.pages[$scope.selection - 1];
				$scope.wordIndex = 1;
			}
		}
		while(newTime > $scope.page.timestamp[$scope.wordIndex]){
			$scope.wordIndex++;
		}
	});

}]);
