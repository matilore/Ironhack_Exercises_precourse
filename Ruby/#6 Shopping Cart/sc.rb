class ShopCart
	def initialize
		@items = []
	end

	def add_item(item)
		@items.push(item)
	end

	def checkout
		@total = 0
		@items.each do |x|
			@total += x.price
		end
		if @items.length > 5
			@total = (@total * 90) / 100
		end
		puts "Your total today is #{@total}$ "

	end
end

shop_cart = ShopCart.new


class Item
	def initialize(name, price)
		@name = name
		@price = price
	end

	def price
		@price
	end
end

class Fruit < Item

		def price
			time = Time.new
			wd_n = time.wday
			if wd_n == 0 || wd_n == 6
				@price = (@price * 90) / 100
			else 
				@price
			end
	end
end

class Houseware < Item
	def price
		if @price > 100
			@price = (@price * 95) / 100
		else
			@price
		end
	end
end

banana = Fruit.new("Banana", 10)
orange_juice = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
vacuum_cl = Houseware.new("Vaccum Cleaner", 150)
anchovies = Item.new("Anchovies", 2)


shop_cart.add_item(banana)
shop_cart.add_item(rice)
shop_cart.add_item(vacuum_cl)
shop_cart.add_item(anchovies)
shop_cart.add_item(banana)
shop_cart.add_item(rice)

shop_cart.checkout