class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :private, :cards
  
  # has_one :user
  has_many :cards
  belongs_to :user
end
