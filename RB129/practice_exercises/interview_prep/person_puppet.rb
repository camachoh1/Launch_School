# will the following code execute? what will be the output?

class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    "Hello! they call me #{name}"
  end
end

class Puppet < Person
  def initialize(name)
    super
  end

  def greet(message)
    puts super + message
  end
end

puppet = Puppet.new("Cookie Monster")
puppet.greet(" and I love cookies!")

=begin 

no it wont execute because the super on line 21 will be forwarding the message argument into the greet method in the superclass which do not receive any arguments. returning an error message 
=end