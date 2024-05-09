=begin 

Let's practice creating an object hierachy. 

Create a class called Greeting with a single instance method called greet that takes a string argument and print that argument to the terminal. 

Now create two other classes that are derived from Greeting: one called Hello and one called Goodbye. 

The Hello class should have a hi method that takes no arguments and prints "hello". The Goodbye class should have a bye method to say "goodbye". Make use of the Greeting class greet method when implementing the "Hello" and Goobye class. 

=end 

class Greeting
  def greet(str)
    puts str
  end
end 

class Hello < Greeting 
  def hi 
    greet("hello")
  end 
end 

class Goodbye < Greeting
  def goodbye
    greet("goodbye")
  end 
end 

hola = Hello.new
chao = Goodbye.new 

hola.hi
chao.goodbye