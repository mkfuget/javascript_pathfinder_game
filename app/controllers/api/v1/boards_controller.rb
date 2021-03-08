class Api::V1::BoardsController < ApplicationController

    def index
        render json: Board.all
    end
    def new
        @board = Board.new
    end
    def create
        @board = Board.create(board_params)
    end
    def show
    end
    def board_params
        params.fetch(:board, {}).permit(:width, :height, :board_type, cells_attributes: [:board_index, :cell_type])
    end
end
