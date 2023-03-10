class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :deck, null: false, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
