class ScoreSerializer < ActiveModel::Serializer
  attributes :score, :deck
  # has_one :user
  # has_one :deck
end
