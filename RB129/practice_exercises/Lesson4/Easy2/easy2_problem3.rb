=begin 

How do you find where Ruby will look for a method when that mtehod is called? How can you find an object's ancestors? 

by calling the ancestors method on the class we want to find the lookup chain. 

What is the lookup chain for Orange and HotSauce

Orange:[Orange, Taste, Object, Kernel, BasicObject]
HotSauce: [HotSauce, Taste, Object, Kernel, BasicObject]

=end 

module Taste
  def flavor(flavor)
    puts "#{flavor}"
  end
end

class Orange
  include Taste
end

class HotSauce
  include Taste
end 

cole = Orange.new
vacile = HotSauce.new

p Orange.ancestors