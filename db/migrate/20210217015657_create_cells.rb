class CreateCells < ActiveRecord::Migration[6.0]
  def change
    create_table :cells do |t|
      t.string :type
      t.integer :x_coord
      t.integer :y_coord

      t.timestamps
    end
  end
end
