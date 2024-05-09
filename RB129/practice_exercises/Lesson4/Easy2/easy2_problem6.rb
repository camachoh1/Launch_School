=begin 
If i have the following class, which one of these is a class method (if any) and how do you know? How would you call a class method? 

Manufacturer is a class method in the example below. 

We know it is a class method because the method name is preceded by self. 

We call class methods on the class name directly for example: 

Television.manufacturer => manufacturer output. 

=end 

class Television 
  def self.manufacturer 
    #method logic
  end

  def model
    #method logic
  end
end 

