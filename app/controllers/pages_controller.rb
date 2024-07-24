class PagesController < ApplicationController
  def home
    @products = Product.all
  end

  def about
  end

  def blogs
  end

  def contact
  end

  def recipes
  end

  def shop
  end
end
