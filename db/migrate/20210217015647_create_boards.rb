class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.integer :width
      t.integer :height
      t.string :type
      t.timestamps
    end
  end
end
