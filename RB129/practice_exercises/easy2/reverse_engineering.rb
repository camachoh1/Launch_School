#Write a class that will display: 

# ABC
# xyz 

#When the following code is run: 

class Transform

  def self.lowercase(str)
    str.downcase
  end

  def initialize(data)
    @my_data = data
  end

  def uppercase
    @my_data.upcase
  end 
end 

my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')

