puts "Please write any text you want"
text = gets.chomp
words = text.split(" ")
words.sort!
words.each do |x|
	x.gsub!(/[^A-Za-z0-9\s]/i, '')
end
puts words.sort_by {|x| x.capitalize}

