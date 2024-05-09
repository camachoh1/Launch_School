=begin 

if we have these two methods in the Computer class, what is the difference in the way the code works? 

=end 

class Computer
  attr_accessor :template

  def create_template
    template
  end
end 

# class Computer
#   attr_accessor :template 

#   def create_template
#     self.template = "template 14321"
#   end

#   def show_template
#     self.template
#   end
# end 

pc = Computer.new 
pc.create_template
pc.template = "template 3245"
p pc.create_template
