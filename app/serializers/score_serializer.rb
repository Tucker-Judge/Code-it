class ScoreSerializer < ActiveModel::Serializer
  attributes :score
  has_one :user
  has_one :deck
end
