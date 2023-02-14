class ScoresController < ApplicationController

    def create

    end
        score = Score.create(score_params)
        render json: score
    private

    def score_params
        params.permit(:user_id, :deck_id, :score)
    end
end
