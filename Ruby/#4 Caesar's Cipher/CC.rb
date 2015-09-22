def cc()
	crypt_num = []
	puts "Please, insert text"
	text = gets.chomp 
	puts "Please, specify a number for the cryptographic degree."
	puts "If no number is specified default value will be applied"
	puts "NUMBER MUST BE INCLUDED IN A RANGE BETWEEN -25 AND 25"
	number = gets.chomp
	#if no number is written -> use -3 as default
	if number == ""
		number = -3
	else
		number = number.to_i
	end
	words = text.split("")
	words.each do |word|
		letrs = word.split("")
		letrs.each do |letr|
			#character is converted if no white space
		unless letr.ord == 32
			letr = letr.ord + number
			#special characters are avoided
			if letr < 97
				letr = letr + 26
			elsif letr > 122
				letr = letr - 26
			end					
		else
			letr = letr.ord
		end
			crypt_num.push(letr)
		end
	end
	#crtpt numbers are reconverted in characters and pushed in result array
	result = []
	crypt_num.each do |num|
		num = num.chr
		result.push(num)
	end		
	puts result.join("")
end

cc()