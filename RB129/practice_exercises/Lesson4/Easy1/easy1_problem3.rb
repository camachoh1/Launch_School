=begin

In the last question we had a module called Speed which contained a go_fast method. We included this module in the Car class as show below. 

When we called the go_fast method from an instance of the Car class you might have noticed that the string printed when go fast includes the name of the type of vehicle we are using. How is this done? 

In the Speed module we are interpolating self.class which references the calling class invoking que go_fast module. 

In this case, When we call the go_fast method on the small_car object, Ruby first checks wether the go_fast method exist in the Car class, then check any mixed in modules. 
Once it arrives to the speed module, the go fast method is found and its executed. self.class references the class of the calling object (small_car) which is the Car class. 

LS answer: 



We use self.class in the method and this works the following way:

    self refers to the object itself, in this case either a Car or Truck object.

    We ask self to tell us its class with .class. It tells us.
    
    We don't need to use to_s here because it is inside of a string and is interpolated which means it will take care of the to_s for us.


=end 

module Speed
  def go_fast 
    puts "I am a #{self.class} and going super fast!"
  end
end 

class Car
  include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end 

small_car = Car.new
small_car.go_fast
