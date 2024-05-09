# what does the self keyword refer to in the good method?

class Dog
  attr_accessor :name

  def good
    self.name + " is a good dog"
  end
end

bandit = Dog.new
bandit.name = "Bandit"
p bandit.good

#here the self keyword is refering to the calling object, in this case bandit. self.name is equivalent to bandit.name. We use self within a class because calling the object itself is out of scope.

