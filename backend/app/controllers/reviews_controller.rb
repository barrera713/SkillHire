class ReviewsController < ApplicationController 
  
    def index
        reviews = Review.all 
        render json: reviews
    end 

    def create 
        review = Review.create(rating: reviews_params["rating"], content: reviews_params["content"], user_id: @current_user.id, contractor_id: params[:contractor_id])
        render json: review 
    end 

    def show
        review = Review.find(params[:id])
        render json: review 
    end 

    def update 
        review = Review.find(params[:id])
        review.update(reviews_params)
    end 

     def reviews_params
        params.require(:review).permit(:rating, :content)
    end 

end 