class FavoirteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :deck
end