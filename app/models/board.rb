class Board < ApplicationRecord
    has_many :cells
    accepts_nested_attributes_for :cells
end
