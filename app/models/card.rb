class Card < ApplicationRecord
  belongs_to :deck

  validates :content, :deck, presence: true
end
