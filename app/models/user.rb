class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, length: { minimum: 8 }

    has_one :cart

    # create_cart!: This method creates a new Cart record associated with the user. 
    # It’s equivalent to calling Cart.create(user_id: self.id), 
    # but it's more idiomatic in Rails when dealing with associations.
    def create_cart
        self.create_cart!
    end
end
