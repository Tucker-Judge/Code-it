class CardSerializer < ActiveModel::Serializer
  attributes :content
  # has_one :deck
  belongs_to :deck
end
