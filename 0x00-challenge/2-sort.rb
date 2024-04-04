##
# 
# Sort integer arguments (ascending)
##
result = ARGV.filter_map do |arg|
    # Convert to integer if it's a valid integer string, otherwise return nil
    arg.to_i if arg.match?(/^[-]?\d+$/)
  end
  
  # Sort the array of integers in ascending order
  result.sort!
  
  # Print each sorted integer on a new line
  puts result
  