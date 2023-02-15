class ScoresController < ApplicationController
    wrap_parameters format: []

    def create
        score = Score.create!(score_params)
        render json: score
    end
    
    private

    def score_params
        params.permit(:user_id, :deck_id, :score)
    end
end
