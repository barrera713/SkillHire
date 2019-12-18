class UsersController < ApplicationController 
    skip_before_action :define_current_user, only: [ :authenticate, :create ]

    def index 
        users = User.all 
        render json: users 
    end 

    def create
        user = User.create(user_params)
        render json: user 
    end 

    def show
        user = User.find(params[:id])
        render json: user 
    end 

    def update 
        user = User.find(params[:id])
        user.update (user_params)
    end 
    

    def authenticate
        user = User.find_by(username: params[:username])
        if user != nil && user.authenticate(params[:password])
            render json: user, methods: [ :auth_token ]
        else 
            render json: { error: true, message: 'Login failed' }
        end 
    end 


    def current_user
        render json: @current_user
    end 

    private def user_params
        params.permit(:name, :username, :password, :city, :state)
    end 

end 