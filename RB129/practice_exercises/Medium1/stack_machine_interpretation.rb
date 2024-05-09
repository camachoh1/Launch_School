class Minilang
  VALID_COMMANDS = ['push', 'add', 'sub', 'mult', 'div', 'mod', 'pop', 'print']
  attr_reader :register

  def initialize(command_string)
    @register = 0
    @stack = []
    @commands = command_string.split
  end

  def eval
    @commands.each do |command|
      command =~ /[0-9]/ ? @register = command.to_i : execute(command.downcase)
    end
  end

  private

  def push
    @stack << @register
  end

  def add
    @register += @stack.pop
  end

  def sub
    @register -= @stack.pop
  end

  def mult
    @register *= @stack.pop
  end

  def div
    @register /= @stack.pop
  end

  def mod
    @register %= @stack.pop
  end

  def pop
    @register = @stack.pop
  end

  def print
    puts "#{@register}"
  end

  def execute(command)
    raise "Invalid Command #{command}" if !VALID_COMMANDS.include?(command)
    self.send(command)
  end
end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
#Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)