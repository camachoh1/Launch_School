# what will the last two lines of code output?


module Walk
  STR = "Walking"
end

module Run
  STR = "Running"
end

module Jump
  STR = "Jumping"
end

class Bunny
  include Jump
  include Walk
  include Run
end

class Bugs < Bunny; end

p Bugs.ancestors #=> [Bugs, Bunny, Run, Walk, Jump, Object, Kernel, BasicObject]
p Bugs::STR #=> running

# here the ancestors method invocation returns [Bugs, Bunny, Run, Walk, Jump, Object, Kernel, BasicObject] notice that Bugs method lookup path checks the super class and then each of its modules. 
# Starting from the last one included Run to the first one Jump. 

# This explains the output of the line 25. The constant STR is called in Bugs. Since it is not found in the lexical scope of the class, it goes up to the superclass, not finding it there goes up to the modules in this case the last module Run is checked first. Ruby finds it there, returns its value and stops looking. 