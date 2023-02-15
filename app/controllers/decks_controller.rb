class DecksController < ApplicationController
    wrap_parameters format: []

    def create
        deck = Deck.create(deck_params)
        render json: deck
    end
    
    def destroy
        Deck.destroy
        render json: {}
    end
    # def show
    #     #allowed created flashcards
    #     session[:page_views_remaining] ||= 0
    #     sessions[:page_views_remaining] += 1
    #     if session[:page_views_remaining] <= 5
    #     deck = Deck.find_by(id: params[:id])
    #     render json: deck
    #     else render json {error: "No pageviews remaining"}, status: :unauthorized
    #     end

    def show
        session[:page_views_remaining] ||= 0
        if session[:user_id]
            deck = Deck.find_by(id: params[:id])
            render json: deck, status: 201
        elsif session[:page_views_remaining] <= 5 
            sessions[:page_views_remaining] += 1
            deck = Deck.find_by(id: params[:id])
            render json: deck, status: 201
        else render json: {error: "huh, what are you doing here"}
        end
    end
    
    def update
        deck = Deck.find_by(id: params[:id])
        deck.update(deck_params)
        render json: deck
    end

    def index
        deck = Deck.all
        # limit by 50 on client side
        render json: deck 
    end
    
    private

    def deck_params
        params.permit(:name, :user_id, :private)
    end
end
