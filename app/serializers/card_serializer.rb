class CardSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :deck
end
