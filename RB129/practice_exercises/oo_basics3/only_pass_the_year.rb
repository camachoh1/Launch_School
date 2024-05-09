#Using the following code, allow truck to accept a second argument upon instantiation. Name the parameter bed_type and implement the modifications so that Car conitues to only accept one argument. 

class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

class Truck < Vehicle
  attr_reader :bed_type
  
  def initialize(year, bed_type)
    super(year)
    @bed_type = bed_type
  end 
end 

class Car < Vehicle
end

truck1 = Truck.new(1994,"short")
puts truck1.year 
puts truck1.bed_type

