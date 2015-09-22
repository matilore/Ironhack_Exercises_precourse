for i in 1..100
	output = ""
	if i % 3 == 0
		output += "Fizz"
	end
	if i % 5 == 0
		output += "Buzz"
	end

	if output == ""
		puts i
	else
	puts output
end
end

