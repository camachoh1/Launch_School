# What will be output when the last 2 lines of code get executed?

class Foo
  @@var = 1

  def self.var
    @@var
  end
end

class Bar < Foo
  @@var = 2
end

puts Foo.var
puts Bar.var 

# both will output 2. There is only one copy of the class variable @@var being passed around the classes. The value is altered in the class Bar, therefore the value in Foo will be updated to 2. 