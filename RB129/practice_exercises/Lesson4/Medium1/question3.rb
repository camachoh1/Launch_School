=begin 

In the last question Alan showed Alyssa this code which keeps track of items for a shopping cart application: 

Alyssa noticed that this will fail when update_quantity is called. Since quantity is an instance variable, it must be accessed with the @quantity notation when setting it. One way to fix this is to change attr_reader to attr_accessor and change quantity to self.quantity

is there anything wrong with fixing it this way?

There is nothing wrong syntactically speaking. However, this will create setter methods for quantity which are public. Allowing clients of the class to change the quantity directly (calling the accessor with the instance.quantity = <new_value>)

it means that the protections built into the update_quantity method can be circumvented and potentially pose problems down the line.

=end 

class InvoiceEntry
  attr_accessor :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    self.quantity = updated_count if updated_count >= 0
  end
end 