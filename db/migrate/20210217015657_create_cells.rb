class CreateCells < ActiveRecord::Migration[6.0]
  def change
    create_table :cells do |t|
      t.string :type
      t.integer :board_index

      t.timestamps
    end
  end
end
