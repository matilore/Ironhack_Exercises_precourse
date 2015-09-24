class Ingredient
	attr_reader :name, :price
	def initialize(name, price)
	@name = name
	@price = price
end
end

banana = Ingredient.new("Banana", 3)
vanilla = Ingredient.new("Vanilla", 1)
chocolate = Ingredient.new("Chocolate", 2)
cherry = Ingredient.new("Cherry", 2)

available_ingredients = ["banana", "vanilla", "chocolate", "cherry"]


class MilkShake
	attr_reader :total_price, :ingredients
	def initialize
		@base_price = 3
		@ingredients = []
	end

	def add_ingredients(ingredient)
		@ingredients.push(ingredient)
	end

	def price_ms
		@total_price = @base_price
		@ingredients.each do |x|
			@total_price += x.price
		end
		@total_price
	end
end

milky = MilkShake.new

class ShakeShop
	def initialize
		@milkshakes = []
	end

	def add_ms(milkshake)
		@milkshakes.push(milkshake)
	end
	
	def checkout
		@message = "You've chosen to put in your milkshake "
		@milkshakes.each do |ms|
			ms.ingredients.each do |x|
			@message += x.name + " "
		end
		@message +=  "for a total cost of " + ms.total_price.to_str + " $"
	end
	puts @message
end
end

shop_cart = ShakeShop.new



	puts "Hi there, we've just opened so we have few ingredients."
	puts "Please choose among them."

	answer = ""

	#Loop
	until answer == "no" do

	
	puts "These are tha available ingredients -> Banana, Vanilla, Chocolate, Cherry"
	chosen_ingredient = gets.chomp.downcase

	unless available_ingredients.include?(chosen_ingredient)
		puts "This ingredient is not available"
		next
	else
		unless milky.ingredients.include?(chosen_ingredient)
			milky.add_ingredients(chosen_ingredient)
			puts ""
			puts "So far you've chosen a " + milky.ingredients.join(" ") + " milkshake"
		else
				puts "This ingredient has already been added"
		end
	end

	puts "Would you like to add another taste to your milkshake? Yes / No"
	answer = gets.chomp.downcase
	
end


=begin

milky.add_ingredients(banana)
milky.add_ingredients(vanilla)

=end

milky.price_ms
shop_cart.add_ms(milky)
shop_cart.checkout
