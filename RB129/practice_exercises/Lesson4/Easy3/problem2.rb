=begin

In the last question we had the following classes, if we call Hello.hi we get an error message. How would you fix this? 


LS explanation: This is rather cumbersome. Note that we cannot simply call greet in the self.hi method definition because the Greeting class itsled only defines greet on its instances, rather than on the Greeting class itself. 
=end 

class Greeting 
  def greet(message)
    puts message
  end
end 

class Hello < Greeting 

  def self.hi
    greeting = Greeting.new
    greeting.greet("Hello")
  end 

  def hi 
    greet("Hello")
  end
end 

p Hello.hi