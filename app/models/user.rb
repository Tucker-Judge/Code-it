class User < ApplicationRecord

    has_many :favorites
    has_many :decks, through: :favorites

    has_many :scores
    has_many :decks, through: :scores

    has_many :decks

    validates :username, :email, :password, presence: true
    validates :username, uniqueness: true

    has_many :follows_as_user1,
        foreign_key: :user1_id,
        class_name: :Follows

    has_many :follows_as_user1,
        foreign_key: :user1_id,
        class_name: :Follows

    has_secure_password
end
