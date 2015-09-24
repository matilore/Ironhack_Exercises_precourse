class Person
	def saluto
		puts "Hola"
	end
end

gustavo = Person.new

#gustavo as non string
gustavo.saluto



#gustavo as a string
puts "name of gustavo"
name = gets.chomp

name.saluto

