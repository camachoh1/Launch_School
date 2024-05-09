# the reason why Ruby allowed Foo::Bar to work as a class name is because the module Foo was defined first. if we removed the module the class name would not be valid and it would return an error message. 

# VAL = "Global"

# module Foo
#   VAL = "Local"

#   class Bar
#     def value1
#       VAL
#     end
#   end
# end

# class Foo::Bar
#   def value2
#     VAL
#   end
# end

# p Foo::Bar.new.value1 #=> Local 
# p Foo::Bar.new.value2 #global 


module A
  BAR_A = 'Bar A!'
  module B
    BAR_B = 'Bar B!'
      class Foo
        BAR_A
        BAR_B
        def greet
          "hi from foo"
        end
      end
  end
end

# class A::B::Baz
#   BAR_A
#   BAR_B
# end

# p A::B::Baz.new::BAR_A 
p A::B::Foo.new::BAR_A