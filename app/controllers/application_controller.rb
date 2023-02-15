class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

private
def not_found(exception)
  render json: { error: "#{exception.model} not found" }, status: 404
end
def unprocessable_entity(exception)
  render json: { errors: exception.record.errors.full_messages }, status: 422
end
