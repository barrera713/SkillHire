class ApplicationController < ActionController::API
    before_action :define_current_user 

    skip_before_action :define_current_user, only: [ :user_login ] 

    attr_reader :current_user, :current_contractor

    def define_current_user

        begin 

            token = request.headers['Authorization'].split(' ')[1]
        
            payload = JWT.decode(token, 'a;lsdkjfgh')[0]

            if(payload['type'] == 'user')
                @current_user = User.find(payload['id'])
            end

            if(payload['type'] == 'contractor')
                @current_contractor = Contractor.find(payload['id'])
            end

            if @current_user || @current_contractor
                return true 
            else 
                render json: {
                    error: true,
                    message: 'User does not exist'
                }
            end
        rescue 
            # They are not
            render json: {
                error: true,
                message: 'Invalid Authentication'
            }
        end

    end

    
    def user_login 
        contractor = Contractor.find_by(username: params[:username])
        user = User.find_by(username: params[:username])
        if user != nil && user.authenticate(params[:password])
            render json: user, methods: [ :auth_token ]
        elsif 
            contractor != nil && contractor.authenticate(params[:password])
            render json: contractor, methods: [ :auth_token ]
        else
            render json: { error: true, message: 'Login failed' }
        end 
    end 

    def current_user
        if @current_user 
            render json: @current_user
        elsif @current_contractor
            render json: @current_contractor
        else
            render json: {
                error: true,
                message: 'User does not exist'
            }
        end
    end 
 

end
