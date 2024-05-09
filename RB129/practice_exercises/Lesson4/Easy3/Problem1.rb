=begin 

If we have this code, what happens in the following cases:

case1: it will print "hello". the Hello class inherits the greet method from Greeting so it can be called within Hello#hi. 

case2: error since there is no bye method in the hello class 

case3: we will get an error message because the greet method is being called without arguments. 

case4: it will print goodbye this is possible because greet is inherited from Greeting. 

case5: will throw an error since hi is an instance method, not a class method. 
=end 

class Greeting 
  def greet(message)
    puts message
  end 
end 

class Hello < Greeting
  def hi 
    greet("Hello")
  end
end 

class Goodbye < Greeting
  def bye 
    greet("Goodbye")
  end
end

# case 1 

hello = Hello.new 
hello.hi 

#case 2

hello = Hello.new
hello.bye

# case 3 

hello  = Hello.new 
hello.greet 

#case 4 

hello = Hello.new 
hello.greet("goobye")

#case 5 

Hello.hi 