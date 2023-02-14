class Score < ApplicationRecord
  belongs_to :user
  belongs_to :deck

  validates :user, :deck, :score, presence: true
end
