=begin 

if I have the following class, what would happen if I called the methods like shown below? 

  the first case will throw an error since manufacturer is a class method that cannot be called on instances of the Television class. 

  the second example, we will get the output of the instance method model. 

  On the third case, we will get the output of the manufacturer class method.

  and the fourth case scenario we will get an error messsage since we are calling an instance method on a class 

=end 

class Television 
  def self.manufacturer
    #method logic
  end 

  def model
    #logic 
  end
end 

tv = Television.new
tv.manufacturer
tv.model 

Television.manufacturer
Television.model 