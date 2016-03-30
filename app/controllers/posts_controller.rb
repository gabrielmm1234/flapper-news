class PostsController < ApplicationController

	def index
		respond_with Post.all
	end

	def create
		respond_with Post.create(post_params)
	end

	def show
		respond_with Post.find(params[:id])
	end

	def upvote
		post = Post.find(params[:id])
		post.increment!(:upvotes)

		respond_with post
	end

	protected

		def verified_request?
			super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
		end

	private
		def post_params
			params.require(:post).permit(:link,:title)
		end
end
