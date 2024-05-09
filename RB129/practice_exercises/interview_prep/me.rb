# what does each self refer to in the code snippet below?

class MeMyselfAndI
  puts self

  def self.me
    puts self
  end

  def myself
    puts self
  end
end

i = MeMyselfAndI.new
p MeMyselfAndI.me
p i.myself

=begin 

the first one refers to the class, the second one inside self.me refers to the class as well. The third one inside the instance method myself referes to i
=end