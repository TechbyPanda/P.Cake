class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  belongs_to :order, optional: true

  validate :either_order_or_cart_present

  private

  def either_order_or_cart_present
    return if order_id.present? ^ cart_id.present?

    errors.add(:base, 'Specify either order or cart, not both')
  end
end
