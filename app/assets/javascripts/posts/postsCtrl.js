angular.module('flapperNews')
	.controller('PostsCtrl',[
	    '$scope',
	    '$stateParams',
	    'posts',
	    function($scope,$stateParams,posts){
	      $scope.post = posts.posts[$stateParams.id];

	      $scope.incrementUpvotes = function(post){
	          post.upvotes += 1
	      }

	      $scope.addComment = function(){
	        if(!$scope.body || $scope.body === '') { return; }
	        $scope.post.comments.push({
	          body: $scope.body,
	          author: 'user',
	          upvotes: 0
	        });
	        $scope.body = '';
	      };
  	}])