=begin
Ben asked Alyssa to code review the following code: 

Alyssa glanced over the code quicly and said "it looks fine, except that you forgot to put the @ before balance when you refere to the blance instance variable in the body of the positive_balance? method"

"Not so fast" Ben replied. "What i'm doing here is valid - I'm not missing an @!"

who is right Ben or Alyssa, and why?

Ben is right because the positive balance method is using the getter method for balance in order to display and compare balance with the the value at the right of >=. 

If the positive_balance method were to use += then we would need to use a @ because in this case we are trying to alter the value of the instance variable @balance which requires us to use @ in order to reasign the value using the getter method. 

LS answer: 

Ben is right because of the fact that he added an attr_reader for the balance instance variable. This means that Ruby will automatically create a method called balance that returns the value of the @balance instance variable. The body of the positive_balance? method will evaluate to calling the balance method of the class, which will return the value of the @balance instance variable. If Ben had omitted the attr_reader (or had used an attr_writer rather than a reader or accessor) then Alyssa would be right.
=end 

class BankAccount
  attr_reader :balance

  def initialize(starting_balance)
    @balance = starting_balance
  end

  def positive_balance
    @balance += 1
  end
end 


account = BankAccount.new(8)
p account.positive_balance
