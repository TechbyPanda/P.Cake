class PagesController < ApplicationController
  def home
    if logged_in?
      @products = Product.all
    else
      @products = Product.all
    end
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
