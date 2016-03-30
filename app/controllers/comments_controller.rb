class CommentsController < ApplicationController
	
	def create
		post = Post.find(params[:post_id])
		comment = post.comments.create(comment_params)
		respond_with post,comment
	end

	def upvote
		post = Post.find(params[:post_id])
		comment = post.comments.find(params[:id])
		comment.increment!(:upvotes)

		respond_with post,comment
	end

	protected

		def verified_request?
			super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
		end

	private
		def comment_params
			params.require(:comment).permit(:body)
		end
end
