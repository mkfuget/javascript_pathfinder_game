class CreateCells < ActiveRecord::Migration[6.0]
  def change
    create_table :cells do |t|
      t.string :cell_type
      t.integer :board_index
      t.belongs_to :board
      t.timestamps
    end
  end
end
