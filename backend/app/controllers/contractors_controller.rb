class ContractorsController < ApplicationController 
    skip_before_action :define_current_user, only: [ :authenticate, :create ]

    def index 
        contractor = Contractor.all 
        render json: contractor 
    end 

    def create
        contractor = Contractor.create(contractor_params)
        # byebug
        render json: contractor 
    end 

    def show
        contractor = Contractor.find(params[:id])
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

private 
    def contractor_params
        params.permit(:name, :username, :password, :city, :state, :language)
    end 

end 

