class BoardsController < ApplicationController

    def index
        @boards = Board.all
    end
    def new
        @board = Board.new
    end
    def create
        binding.pry
        Board.create(board_params)
    end
    def show
    end
    def board_params
        params.fetch(:board, {}).permit(:width, :height, :type, cells_attributes: [:board_index, :type])
    end
end
