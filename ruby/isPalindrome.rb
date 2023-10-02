def is_palindrome?(str)
    # Remove spaces and convert the string to lowercase
    str = str.downcase.gsub(/\s+/, "")
  
    # Check if the string is the same when reversed
    str == str.reverse
end
  
  # Input a string from the user
puts "Enter a string to check if it's a palindrome:"
input_string = gets.chomp
  
if is_palindrome?(input_string)
  puts "#{input_string} is a palindrome."
else
  puts "#{input_string} is not a palindrome."
end
  