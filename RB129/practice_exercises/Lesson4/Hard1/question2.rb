=begin 

Building on the prior vehicles question, we now must also track a basic motorboat. A motoroboat has a single propeller and a hull, but otherwise behaves similar to a catamaran. Therefore, creators of Motorboat instances don't need to specity number of hulls or propellers. How would you modify the vehicles code to incorporate a new Motoroboat class? 



=end 

module Vehicle
  attr_accessor :speed, :heading
  attr_accessor :fuel_capacity, :fuel_efficiency

  def range
    @fuel_capacity * fuel_efficiency
  end
end

class Seacraft 
  include Vehicle 

  attr_reader :hull_count, :propeller_count

  def initialize(num_propellers, num_hulls, km_traveled_per_liter, liters_of_fuel_capacity)
    @propeller_count = num_propellers
    @hull_count = num_hulls
    self.fuel_capacity = liters_of_fuel_capacity
    self.fuel_efficiency = km_traveled_per_liter
  end
end 

class WheeledVehicle
  include Vehicle 
  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    self.fuel_capacity = liters_of_fuel_capacity
    self.fuel_efficiency = km_traveled_per_liter
  end 

  def tire_pressure(tire_index)
    @tires[tire_index]
  end 
  
  def inflate_tire(tire_index, pressure)
    @tires[tire_index] = pressure
  end
end 

class Auto < WheeledVehicle
  def initialize
    super([30,30,32,32], 50,25.0)
  end
end 

class Motorcycle < WheeledVehicle
  def initialize
    super([20,20], 80, 8.0)
  end
end 

class Catamaran < Seacraft  
end


class Motorboat < Seacraft

  def initialize(km_traveled_per_liter, liters_of_fuel_capacity)
    super(1,1, km_traveled_per_liter, liters_of_fuel_capacity)
  end 
end 


