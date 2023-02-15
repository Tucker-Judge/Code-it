class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :author, :deck_name
  # has_one :user
  # has_one :deck
  def author
  object.deck.user.username
  end
  
  def deck_name
    object.deck.name
  end
end
