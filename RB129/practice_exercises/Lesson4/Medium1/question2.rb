=begin 

Alan created the followinf code to keep track of items for a shopping cart application he's writing, Alyssa looked at the code and spoted a mistake. "This will fail when update_quantity is called" , she says.

Can you spot the mistake and how to address it? 

on line 21, we are trying to set the value of updated_count to cuantity if the value of quantity is negative. 

Code before fixing the mistake: 

quantity = updated_count if updated_count >= 0 

here, we checking wether the value of updated_count is greater than 0 then is assigning this value to the quantities instance variable. 

first, notice that there is no setter method for @quantity, this will throw us an error. 

So we need to either add the @ to quantity to reference the instance variable setter or change the attr_reader to writer and reference the setter using self.quantity = updated_count if updated_count >= 0 

=end

class InvoiceEntry
  attr_reader :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    #prevent negative quantities from being set
    @quantity = updated_count if updated_count >= 0
  end
end 