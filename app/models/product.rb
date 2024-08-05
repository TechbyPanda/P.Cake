class Product < ApplicationRecord
    def self.products_with_cart_status(user_id)
        joins("LEFT JOIN line_items ON products.id = line_items.product_id AND line_items.cart_id IN (SELECT id FROM carts WHERE user_id = ?)", user_id).select("products.*, CASE WHEN line_items.id IS NULL THEN false ELSE true END AS added_to_cart")
    end
end
