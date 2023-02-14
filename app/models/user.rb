class User < ApplicationRecord

    has_many :favorites
    has_many :decks, through: :favorites

    has_many :scores
    has_many :decks, through: :scores

    validates :username, :email, :password, presance: true
    validates :username, uniqueness: true
end
