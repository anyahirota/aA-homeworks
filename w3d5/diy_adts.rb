class Stack
    def initialize
      # create ivar to store stack here!
      @stack = []
    end

    def push(el)
      # adds an element to the stack
      @stack.push(el)
    end

    def pop
      # removes one element from the stack
      @stack.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @stack[-1]
    end
  end

  class Queue
    def initialize
      @queue = []
    end

    def enqueue(el)
      @queue.unshift(el)
    end

    def dequeue
      @queue.pop
    end

    def peek
      @queue[-1]
    end
  end

  class Map
    def initialize
      @map = []
    end

    def set(key, value)
        @map.each do |pair|
            if pair[0] == key
                return pair[1] = value
            end 
        end  
        @map << [key, value]
    end

    def get(key)
        @map.each do |pair|
            if pair[0] == key
                return pair
            end 
        end 
        p "key not in map"
    end

    def delete(key)
        @map.reject! do |pair|
            pair[0] == key
        end 
    end

    def show
        @map
    end 
  end