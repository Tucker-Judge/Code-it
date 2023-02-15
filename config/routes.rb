Rails.application.routes.draw do
  
  resources :favorites, only: [:index, :create, :destroy]
  resources :follows, only: [:create, :destroy]
  resources :scores, only: [:create]
  resources :cards, only: [:create, :destroy, :update]
  resources :decks
  resources :users

  get "/login", to: "sessions#create"
  get "/logout", to: "sessions#delete"
  get "/profile", to: "sessions#show"

  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#delete"
  get "/profile", to: "sessions#me"
end
