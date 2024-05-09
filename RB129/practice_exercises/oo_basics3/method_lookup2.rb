#Using the following code, determine the lookup path used when invoking cat1.color. only list the classes and modules that Riby will check when searching for the color method. 

class Animal
end 

class Cat < Animal
end

class Bird < Animal
end

cat1 = Cat.new
cat1.color 

=begin 

--- Cat Lookup Path --- 
    Cat
    Animal
    Object
    Kernel
    BasicObject 

No color found, returns an error. 

=end 