class Board < ApplicationRecord
    has_many :cells
    accepts_nested_attributes_for :cells

    def cells_attributes=(cells_attributes)
        cells_attributes.each do |cell_attributes|
            cell = Cell.create(cell_attributes)
            self.cells << cell 
        end
    end
end
