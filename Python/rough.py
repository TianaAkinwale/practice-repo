#Complete the function digits(n) that returns how many digits the number has. For example: 
# 25 has 2 digits and 144 has 3 digits. Tip: you can figure out the digits 
# of a number by dividing it by 10 once per digit until there are no digits left.
#def digits(n):
#	count = 0
#	if n == 0:
#	  return 1
#	while (n != 0):
#		count += 1
#		n //= 10
#	return count
#print(digits(25))   # Should print 2
#print(digits(144))  # Should print 3
#print(digits(1000)) # Should print 4
#print(digits(0))    # Should print 1

#def counter(start, stop):
#	x = start
#	if x >= stop:
#		return_string = "Counting down: "
#		while x >= stop:
#			return_string += str(x)
#			if x > stop:
#				return_string += ","
#			x -= 1
#	else:
#		return_string = "Counting up: "
#		while x <= stop:
#			return_string += str(x)
#			if x < stop:
#				return_string += ","
#			x += 1
#	return return_string

#print(counter(1, 10)) # Should be "Counting up: 1,2,3,4,5,6,7,8,9,10"
#print(counter(2, 1)) # Should be "Counting down: 2,1"
#print(counter(5, 5)) # Should be "Counting up: 5"#
#