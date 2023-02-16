class CardSerializer < ActiveModel::Serializer
  attributes :content, :id
  # has_one :deck
  belongs_to :deck
end
