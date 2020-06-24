class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false 
    @seq = []
  end

  def play

  end

  def take_turn

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

  end

  def game_over_message

  end

  def reset_game

  end
end
