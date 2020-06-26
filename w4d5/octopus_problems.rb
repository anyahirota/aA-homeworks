def sluggish_octopus(fishies)
    sorted = false 

    while !sorted 
        sorted = true
        (0...fishies.length-1).each do |i|
            if fishies[i].length > fishies[i+1].length
                fishies[i], fishies[i+1] = fishies[i+1], fishies[i]
                sorted = false
            end 
        end
    end
    fishies[-1]
end 

def dominant_octopus
#merge sort
end 

def clever_octopus(fishies)
    long_boi = fishies[0]
    (1...fishies.length).each do |i|
        long_boi = fishies[i] if fishies[i].length > long_boi.length
    end 
    long_boi
end 

# fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# puts clever_octopus(fish)




def slow_dance(dir, tiles_array)
    tiles_array.each_with_index do |ele, i|
        return i if dir == ele
    end 
end

# tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
# puts slow_dance("up", tiles_array)
# puts slow_dance("right-down", tiles_array)

def fast_dance(dir, new_tiles_data_structure)
    new_tiles_data_structure[dir]
end 

# new_tiles_data_structure = {
#     "up" => 0, 
#     "right-up" => 1, 
#     "right" => 2, 
#     "right-down" => 3, 
#     "down" => 4, 
#     "left-down" => 5, 
#     "left" => 6,  
#     "left-up" => 7
# }

# puts fast_dance("up", new_tiles_data_structure)
# puts fast_dance("right-down", new_tiles_data_structure)



