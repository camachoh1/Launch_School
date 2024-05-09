# Using the followinf code, add a method named share_secret that prints the value of @secret when invoked. 

class Person
  attr_writer :secret

  def share_secret
    secret
  end 

  private

  attr_reader :secret
end 

person1 = Person.new
person1.secret = "Shh..this is a secret!"
p person1.share_secret 