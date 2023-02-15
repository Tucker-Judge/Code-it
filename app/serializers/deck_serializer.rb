class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :private, :author, :cards

  def author
    object.user.username
  end
  
  # has_one :user
  has_many :cards
  # belongs_to :user
end
