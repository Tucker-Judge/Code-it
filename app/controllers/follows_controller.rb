class FollowsController < ApplicationController
    # def create
    #     following = Follow.create(follow_params)

    # end


    private
    def follow_params
        params.permit(:user1, :user2)
    end
end
