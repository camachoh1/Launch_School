# class CircularQueue
#   def initialize(buffer_size)
#     @buffer = Array.new(buffer_size)
#     @next_position = 0 # write/end
#     @oldest_position = 0 # read/start
#   end

#   def enqueue(element) #write/add/replace
#     unless @buffer[@next_position].nil?
#       @oldest_position = increment(@next_position)
#     end

#     @buffer[@next_position] = element
#     @next_position = increment(@next_position)
#   end

#   def dequeue   #read/remove 
#     value = @buffer[@oldest_position]
#     @buffer[@oldest_position] = nil
#     @oldest_position = increment(@oldest_position) unless value.nil?
#     value
#   end

#   private

#   def increment(position) # increments/wraps around 0
#     (position + 1) % @buffer.size
#   end
# end

class CircularQueue
  attr_reader :size, :buffer

  def initialize(buffer_size)
    @buffer = Array.new
    @size = buffer_size
  end

  def dequeue
    buffer.shift
  end

  def enqueue(element)
    dequeue if buffer.size == size
    buffer.push(element)
  end
end 

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil