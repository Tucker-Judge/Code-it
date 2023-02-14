class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :deck
  
  # has_one :user
  has_one :deck

  belongs_to :user
end
