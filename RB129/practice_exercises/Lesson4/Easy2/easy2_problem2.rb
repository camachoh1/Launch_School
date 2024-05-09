=begin 
We have an Oracle class and RoadTrip class that inherits from the Oracle class. What is the result of the following: 

In this case, the output will be "You will + any of the activities in RoadTrip#choices. This is because the RoadTrip class inherits from Oracle which contains the method predict_the_future. This method, calls sample on choices. At this point, ruby needs to find a choices method in order to fully execute predict_the_future. Since the RoadTrip class contains a choices method, it executes it and returns the output explained earlier. 

This is because every time Ruby tries to resolve a method name, it will start with the methods defined on the class you are calling. So even though the call to choices happens in amethod defined in Oracle, Riby will first look for a definition of choices in Roadtrip before falling back to Oracle if it does not find choices defined in RoadTrip. 

=end

class Oracle 
  def predict_the_future
    "You will" + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end 

class RoadTrip < Oracle 
  def choices
    ["visit Vegas", "fly to Fiji", "romp in Rome"]
  end
end 

trip = RoadTrip.new
trip.predict_the_future