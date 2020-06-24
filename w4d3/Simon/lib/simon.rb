class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false 
    @seq = []
  end

  def play
    # until @game_over == true 
    #   self.take_turn
      
    # end 
  end

  def take_turn
    # until @game_over == true
    #   self.require_sequence
    #   self.show_sequence
    #     input = gets.chomp

    #   @sequence_length += 1
    #   self.round_success_message
    # end
  end

  def show_sequence
    @seq.each do |ele|
      puts ele
      sleep(1)
      system("clear")
    end 
  end

  def require_sequence
    @sequence_length.times do 
      self.add_random_color
    end 
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Yay! You made it to the next round. The next sequence will be the length of #{self.sequence_length}"
  end

  def game_over_message
    puts "Boohoo, you lose."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
