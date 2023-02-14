class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :username, :deck_name
  # has_one :user
  # has_one :deck
  def username
  object.user.username
  end
  def deck_name
    object.deck.name
  end
end