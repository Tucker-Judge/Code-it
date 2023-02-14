class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :private
  has_one :user
  has_many :cards
end
