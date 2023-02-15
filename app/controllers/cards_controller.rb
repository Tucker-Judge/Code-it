class CardsController < ApplicationController
    wrap_parameters format: []

    def create
        card = Card.create!(card_params)
        render json: card
    end

    def destroy
        card = Card.find_by(id: params[:id])
        card.destroy
        render json: {}
    end

    def update
        card = Card.find_by(id: params[:id])
        card.update(card_params)
        render json: card
    end
    
    private

    def card_params
        params.permit(:content, :deck_id)
    end
end
