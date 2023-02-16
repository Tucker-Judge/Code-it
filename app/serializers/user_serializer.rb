class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :decks
  has_many :favorites, serializer: FavoriteSerializer
  has_many :scores
end
