class ContractorsController < ApplicationController 
    skip_before_action :define_current_user, only: [ :authenticate, :create, :index ]

    def index 
        contractor = []
        Contractor.all.each do | seller |
            contractor.push({ contractor: seller, contractor_skills: seller.skills })
        end 
        render json: contractor
    end 

    def create
        contractor = Contractor.create(contractor_params)
        render json: contractor 
    end 

    def show
        contractor = []
        seller = Contractor.find(params[:id])
        # byebug
        contractor.push(seller)
        userNames = seller.reviews.map do |review|
            User.find(review.user_id)
        end
        # byebug
        contractor.push(reviews: seller.reviews, skills: seller.skills, reviewers: userNames)
        render json: contractor 
    end 


    def update 
        contractor = Contractor.find(params[:id])
        contractor.update (user_params)
    end 


    def authenticate
        contractor = Contractor.find_by(username: params[:username])
        if contractor != nil && contractor.authenticate(params[:password])
            render json: contractor, methods: [ :auth_token ]
        else 
            render json: { error: true, message: 'Login failed' }
        end 
    end 

    def current_contractor 
        render json: @current_contractor
    end 


    def contractor_params
        params.permit(:name, :username, :email, :password, :city, :state)
    end 

end 

