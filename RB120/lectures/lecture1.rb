# 1. Given the below usage of the Person class, code the class definition.


# class Person
#   attr_accessor :name 

#   def initialize(n)
#     self.name = n
#   end 
# end

# bob = Person.new("bob")
# p bob.name # -> 'bob'
# bob.name = 'Robert'
# p bob.name #-> 'Robert'

# 2. 2. Modify the class definition from above to facilitate the followinf methods. Note that there is no name= setter method now. 

# Hint: let first_name and last_name be "states" and create an instance method called name that uses those states. 


# class Person 
#   attr_accessor :first_name, :last_name
#   def initialize(full_name)
#     parts = full_name.split
#     self.first_name = parts[0]
#     self.last_name = parts.size > 1 ? parts[1] : ''  
#   end

#   def name
#     "#{first_name} #{last_name}"
#   end
# end

# bob = Person.new('Robert')
# p bob.name # -> "Robert"
# p bob.first_name #-> 'Robert'
# p bob.last_name #-> ''
# bob.last_name = 'Smith'
# p bob.name #-> 'Robert Smith'

# 3. Now create a smart name= method that can take just a first name or a full name, and knows how to set the first_name and last_name appropiately. 


# class Person
#   attr_accessor :first_name, :last_name

#   def initialize(full_name)
#     parts = full_name.split
#     self.first_name = parts[0]
#     self.last_name = parts.size > 1 ? parts[1] : ''
#   end

#   def name
#     "#{first_name} #{last_name}".strip
#   end

#   def name=(full_name)
#     parts = full_name.split
#     self.first_name = parts[0]
#     self.last_name = parts.size > 1 ? parts[1] : ''
#   end
# end

# class Person 
#   attr_accessor :first_name, :last_name

#   def initialize(full_name)
#     parse_full_name(full_name)
#   end 

#   def name
#     "#{first_name} #{last_name}".strip
#   end

#   def name=(full_name)
#     parse_full_name(full_name)
#   end

#   private

#   def parse_full_name(full_name)
#     parts = full_name.split
#     self.first_name = parts[0]
#     self.last_name = parts.size > 1 ? parts[1] : ''
#   end
# end 

# bob = Person.new('Robert')
# p bob.name #=> 'Robert'
# p bob.first_name #=> 'Robert'
# p bob.last_name #=> ''
# bob.last_name = 'Smith'
# p bob.name #=> "Robert Smith"

# bob.name = "John Adams"
# p bob.first_name #=> 'John'
# p bob.last_name #=> 'Adams'

# 4. Using the class defitiniton from step #3 , let's create a few more people -- that is, Person objects. 

# if we're trying to determine wether the two objects contain the same name, how can we compare the two objects? 

# class Person 
#   attr_accessor :first_name, :last_name

#   def initialize(full_name)
#     parse_full_name(full_name)
#   end 

#   def name
#     "#{first_name} #{last_name}".strip
#   end

#   def name=(full_name)
#     parse_full_name(full_name)
#   end

#   private

#   def parse_full_name(full_name)
#     parts = full_name.split
#     self.first_name = parts[0]
#     self.last_name = parts.size > 1 ? parts[1] : ''
#   end
# end

# bob = Person.new('Robert Smith')
# rob = Person.new('Robert Smith')

# p rob.name == bob.name 

#5. Continuing with our person class definition, what does the below print out? 


class Person 
  attr_accessor :first_name, :last_name

  def initialize(full_name)
    parse_full_name(full_name)
  end 

  def name
    "#{first_name} #{last_name}".strip
  end

  def name=(full_name)
    parse_full_name(full_name)
  end

  def to_s
    name
  end

  private

  def parse_full_name(full_name)
    parts = full_name.split
    self.first_name = parts[0]
    self.last_name = parts.size > 1 ? parts[1] : ''
  end
end

bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')

bob = Person.new("Rober Smith")
puts "The person's name is: #{bob}"

# the to_s method is called automatically when using string interpolation. A way to solve this problem is to override the to_s method from the Object class by creating a custom to_s method in our class or by using string concatenation or calling the name method within the string interpolation pattern. 