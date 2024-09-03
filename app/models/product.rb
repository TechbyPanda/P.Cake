class Product < ApplicationRecord
    has_many :line_items
    has_many :carts, through: :line_items
  
    scope :with_cart_id_for_user, ->(user_id) {
      select('products.id AS product_id, products.name, products.image, COALESCE(line_items.cart_id, NULL) AS cart_id')
      .left_joins(line_items: :cart)
      .where('carts.user_id = ? OR carts.user_id IS NULL', user_id)
    }

    scope :get_all, ->(user_id) {
        select('products.id as product_id, products.name, products.image, carts.id as cart_id')
        .left_joins(:carts)
        .where('carts.user_id = ? ', user_id)
    }
end
  