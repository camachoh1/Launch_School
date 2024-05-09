# Suppose we're building a software system for a pet hotel business, so our classes deal with pets. 

# 1. Given this class: 

# One problem is that we need to keep track of different breeds of dogs, since they have slighly different behaviours. For example, bulldogs can't swim, but all other dogs can. 

#Create a sub-class from Dog called bulldog overriding the swim method to return "cant'swim" 


# class Dog
#   def speak
#     'Bark!'
#   end

#   def swim 
#     'Swimming'
#   end
# end

# class BullDog < Dog 
#   def swim
#     "Can't swim!"
#   end
# end 



# teddy = Dog.new 
# puts teddy.speak #=> "Bark"
# puts teddy.swim #=> "Swimming!"

# bully = BullDog.new 
# puts bully.swim

# 2. Let's create a few more methods fo our Dog class. 

# Create a class called Cat, which can do everything a dog can, except swim or fetch. Assume the methods do the exact same thing. 
# hint: dont just copy and paste all methods in Dog into Cat; try to come up with some class hierarchy. 

# class Pet
#   def run
#     "Running"
#   end


#   def jump
#     "Jumping"
#   end
# end 

# class Dog < Pet 
#   def speak
#     "bark!"
#   end

#   def swim
#     "Swimming"
#   end

#   def fetch
#     "Fetching"
#   end
# end 

# class Bulldog < Dog 
#   def swim
#     "Can't swim!"
#   end
# end 

# class Cat < Pet
#   def speak
#     "meow!"
#   end 
# end 

# pete = Pet.new
# kitty = Cat.new
# dave = Dog.new
# bud = Bulldog.new

# # pete.run                # => "running!"
# # pete.speak              # => NoMethodError

# p kitty.run               # => "running!"
# p kitty.speak             # => "meow!"
# # kitty.fetch             # => NoMethodError

# p dave.speak              # => "bark!"

# p bud.run                 # => "running!"
# p bud.swim                # => "can't swim!"

# 3. Draw a class hierarchy diagram of the classes from step2 


=begin 

--- Class Pet ---
    Pet
    Object
    Kernel
    BasicObject

--- Class Dog ---
    Dog
    Pet
    Object
    Kernel
    BasicObject

--- Class Bulldog ---
    Bulldog
    Dog
    Pet
    Object
    Kernel
    BasicObject

--- Class Cat ---
    Cat
    Pet
    Object
    BasicObject
=end 