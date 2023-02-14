class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email

  # has_many :favorites
  has_many :decks
  has_many :favorites
end
