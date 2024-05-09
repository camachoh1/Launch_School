=begin 

Ben and Alyssa are working on a vehivle management system. So far, they have created classes called Auto and Motorcycle to represent automobile and motorcycles. After having noticed common information and calculations they were performing for each type of vehicle they decided to break out the commonality into a separate class called WheeledVehicle this is what their code looks like so far: 

=end 
module Vehicle
  attr_accessor :speed, :heading
  attr_accessor :fuel_efficiency, :fuel_capacity

  
  def range
    @fuel_capacity * @fuel_efficiency
  end
end 

class WheeledVehicle
  include Vehicle 
  

  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    self.fuel_efficiency = km_traveled_per_liter
    self.fuel_capacity = liters_of_fuel_capacity
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
    # 4 tires are various tire pressures
    super([30,30,32,32], 50, 25.0)
  end
end 

class Motorcycle < WheeledVehicle
  def initialize
    # 2 tires are various tire pressures
    super([20,20], 80, 8.0)
  end
end

class Catamaran
  include Vehicle
  attr_reader :propeller_count, :hull_count

  def initialize(num_propellers, num_hulls, km_traveled_per_liter, liters_of_fuel_capacity)
    @propeller_count = num_propellers
    @hull_count = num_hulls
    self.fuel_efficiency = km_traveled_per_liter
    self.fuel_capacity = liters_of_fuel_capacity
  end
end 

# this new class does not fit well with the object hierachy defined so dat. Catamarans don't have tires, But we still want common code to track fuel efficiency and range. Modify the class definitions and move code into a MOdule as necessary to share code among the Catamaran and wheeled vehicles. 

carro = Auto.new

p carro.range
p carro.tire_pressure(0)
p carro.fuel_capacity
p carro.fuel_efficiency

catamaran = Catamaran.new(2, 1, 50, 25.0)

p catamaran.range 