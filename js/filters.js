'use strict';

var funBooksFil = angular.module('funBooksFil',[]);

funBooksFil.filter('highlightIndex', function () {
  return function (text, index) {
  	if(angular.isNumber(index)){
  		text = text.toString();	
  		var nth = 0;
  		return text.replace(/[^\u0000-\u007F]+/g, function(match, offset) {
  			nth++;
  			if( nth === index) {
  				return '<span class="ui-match">' + match + '</span>';
  			} else {
  				return match;
  			}
  		});
  	} else {
  		return text;
  	}
  };
});