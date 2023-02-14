class CreateFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :follows do |t|
      t.integer :user1
      t.integer :user2

      t.timestamps
    end
  end
end
