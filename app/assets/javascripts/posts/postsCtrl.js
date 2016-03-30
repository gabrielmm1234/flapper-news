angular.module('flapperNews')
	.controller('PostsCtrl',[
	    '$scope',
	    'posts',
	    'post',
	    function($scope,posts,post){
	      $scope.post = post;
	      $scope.incrementUpvotes = function(post){
	          post.upvotes += 1
	      }

	      $scope.addComment = function(){
	        if(!$scope.body || $scope.body === '') { return; }
	        posts.addComment(post.id,{
	        	body: $scope.body,
	        	author: 'user'
	        }).success(function(comment){
	        	$scope.post.comments.push(comment);
	        })
	        $scope.body = '';
	      };
  	}])