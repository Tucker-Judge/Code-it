class UsersController < ApplicationController
    
# skip_before_action only: [:index]
    def index
        user = User.all
        render json: user
    end
    def show
        #less personal show will be shown to all users
        user = User.find_by(id: params[:id])
        render json: user
    end
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}
        end
    end

    def me
        #more personal show will include email for example
        # user = User.find(session[:user_id])
       #comment out below for real shit 
        user = User.find_by(user_id: session[:user_id])
        render json: user, status: :ok
      end




    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end
end
