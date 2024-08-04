class LineItemsController < ApplicationController
    def increment
      @line_item = LineItem.find(params[:id])
      @line_item.quantity += 1
  
      if @line_item.save
        render json: { success: true, message: "Quantity increased successfully!" }
      else
        render json: { success: false, message: "Error updating quantity." }
      end
    end
  
    def decrement
      @line_item = LineItem.find(params[:id])
  
      if @line_item.quantity > 1
        @line_item.quantity -= 1
  
        if @line_item.save
          render json: { success: true, message: "Quantity decreased successfully!" }
        else
          render json: { success: false, message: "Error updating quantity." }
        end
      else
        @line_item.destroy
        render json: { success: true, message: "Item removed from the cart." }
      end
    end
  end
  