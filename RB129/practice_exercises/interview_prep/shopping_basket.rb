# GOAL:
# Create an application that allows you to add "products" to a shopping basket.
# So define the CLASSES for each product (make 3).
# Products should have a name and a price (an integer).
# Add products to the shopping basket
# At checkout calculate total_price of ALL products.

# class ShoppingBasket

# end

# class CheckoutDesk

# end

class ShoppingBasket
  attr_reader :products
  def initialize
    @products = []
  end

  def <<(product)
    products.push(product)
  end
end

class CheckoutDesk
  def calculate_total(basket)
    total_amount = 0

    basket.products.each do |product|
      total_amount += product.price
    end
    total_amount
  end
end

class Product
  attr_reader :name, :price
end

class Milk < Product
  def initialize(name, price)
    @name = name
    @price = price
  end
end

class Cereal < Product
  def initialize(name, price)
    @name = name
    @price = price
  end
end

class Bread < Product
  def initialize(name, price)
    @name = name
    @price = price
  end
end

basket = ShoppingBasket.new 

cheerios = Cereal.new('cheerios', 5)
whole_milk = Milk.new("Whole milk", 3)
italian_bread = Bread.new("italian break", 2)

basket << cheerios
basket << whole_milk
basket << italian_bread

checkout = CheckoutDesk.new

p checkout.calculate_total(basket)