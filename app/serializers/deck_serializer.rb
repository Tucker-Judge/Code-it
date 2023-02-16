class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :private, :author, :cards

  def author
    object.user.username
  end

  # def isFavorite
  #   object.favorites
  # end
  
  # has_one :user
  has_many :cards
  # belongs_to :user
  # has_many :favorites
end
