class CartsController < ApplicationController
  def index
    @cart = current_user.cart || current_user.create_cart
  end
end
