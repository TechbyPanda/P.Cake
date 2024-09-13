class ProductsController < ApplicationController
    before_action :set_product, only: [:add_to_cart]

    def add_to_cart
      cart = current_user.cart
    
      if cart.line_items.exists?(product_id: @product.id)
        flash[:notice] = "Product is already in your cart."
      else
        line_item = cart.line_items.new(product_id: @product.id)
    
        if line_item.save
          flash[:success] = "Product added to your cart."
        else
          flash[:error] = line_item.errors.full_messages.to_sentence
        end
      end
    
      redirect_to root_path
    end    

    private

    def set_product
        @product = Product.find(params[:id])
    end
end
