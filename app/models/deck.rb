class Deck < ApplicationRecord
  
  belongs_to :user

  has_many :favorites
  has_many :users, through: :favorites

  has_many :scores
  has_many :users, through: :scores

  has_many :cards

  validates :user, :name, presence: true
end
