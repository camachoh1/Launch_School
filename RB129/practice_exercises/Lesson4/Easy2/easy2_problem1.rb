# what is the result of executing the folling code

# it will return the string "you will" followed by one of the choices from the choices method which is chose randomly. 

class Oracle
  def predict_the_future
    "You will " + choices.sample 
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end 

oracle = Oracle.new 
oracle.predict_the_future 