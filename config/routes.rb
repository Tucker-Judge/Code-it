Rails.application.routes.draw do
  
  resources :favorites, only: [:index, :create, :destroy]
  resources :follows
  resources :scores, only: [:create]
  resources :cards, only: [:create, :destroy, :update]
  resources :decks, only: [:index, :create, :destroy, :update, :show]
  resources :users
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
