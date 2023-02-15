class DecksController < ApplicationController
    wrap_parameters format: []
before_action :authorize

    def create
        deck = Deck.create!(deck_params)
        render json: deck
    end
    
    def destroy
        Deck.destroy
        render json: {}
    end
    def show
        #allowed created flashcards
        if session[user_id] || session[:page_views_remaining] <= 5
            session[:page_views_remaining] ||= 0
            deck = Deck.find_by(id: params[:id])
            sessions[:page_views_remaining] += 1
        render json: deck
        else render json {error: "No pageviews remaining"}, status: :unauthorized
        end
    end
    def update
        deck = Deck.find_by(id: params[:id])
        deck.update(deck_params)
        render json: deck
    end

    def index
        # limit by 50 on client side
        decks = Deck.all
    new_deck = decks.where(private: false)
        render json: new_deck
    end

    def show
        deck = Deck.find_by(id: params[:id])
        render json: deck
    end
    
    private

    def deck_params
        params.permit(:name, :user_id, :private)
    end
end
