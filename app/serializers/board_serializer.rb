class BoardSerializer < ActiveModel::Serializer
  has_many :cells
  attributes :width, :height, :board_type
end
