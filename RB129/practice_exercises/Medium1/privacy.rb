# consider the following class: 

class Machine

  def how_to_use
    switch
  end

  def start
    flip_switch(:on)
  end

  def stop
    flip_switch(:off)
  end

  private

  attr_accessor :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

maquina = Machine.new
p maquina.how_to_use
maquina.start
p maquina.how_to_use
maquina.stop
p maquina.how_to_use
