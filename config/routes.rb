Rails.application.routes.draw do
  
  resources :scores, only: [create]
  resources :favoirtes, only: [create, destroy]
  resources :cards, only: [create, destroy, update]
  resources :decks, only: [create, destroy, update]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
