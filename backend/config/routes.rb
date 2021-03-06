Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # default_url_options :host => 'localhost:3000'

  # User 
  post '/user/authenticate', to: 'users#authenticate'
  post '/join', to: 'users#create'
  get '/user/:id', to: 'users#show'
  get '/current-user', to: 'users#current_user'

  # Contractor
  get '/freelancers', to: 'contractors#index'
  post '/contractor/authenticate', to: 'contractors#authenticate'
  post '/start-earning', to: 'contractors#create'
  get '/profile/:id', to: 'contractors#show'
  get '/current-contractor', to: 'contractors#current_contractor'

  # Skill 
  post '/expertise', to: 'skills#create'

  # Review
  get '/reviews', to: 'reviews#index'
  post '/review/new/:contractor_id', to: 'reviews#create'
  
  # Current User
  post '/login', to: 'application#user_login'
  get '/current/user', to: 'application#current_user'
  
end
