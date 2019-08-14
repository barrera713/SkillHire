Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # User routes
  post '/user/authenticate', to: 'users#authenticate'
  post '/join', to: 'users#create'
  get '/user/:id', to: 'users#show'
  get '/current-user', to: 'users#current_user'

  # Contractor routes
  post '/contractor/authenticate', to: 'contractors#authenticate'
  post '/start-earning', to: 'contractors#create'
  get '/contractor/:id', to: 'contractors#show'
  get '/current-contractor', to: 'contractors#current_contractor'

  # Skill routes 
  post '/contractor-expertise', to: 'skills#create'


end
