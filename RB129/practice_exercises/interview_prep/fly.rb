# what concept does this code demonstrate? what will be the output?


class Bird
  def fly
    p "#{self.class} is flying!"
  end
end

class Pigeon < Bird; end
class Duck < Bird; end

birds = [Bird.new, Pigeon.new, Duck.new].each(&:fly)

=begin 

this concept demonstrates the concept of polymorphism through inheritance specifically class inheritance. 

Here we have multiple classes inheriting the fly behaviour from the superclass Bird. This allows all of of the subclasses to inherit the fly behaviour. Since all of the classes in our code now have access to a fly method, we are able to group them in a specific category of objects. This allows our client code to treat each instance as a generic object as long as they respond to the fly method invocation they will be executed by the code regardless of the implementation each object or class has. This is polymorphism through class inheritance. 