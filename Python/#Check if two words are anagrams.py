# Check if two words are anagrams 
# Example:
# find_anagrams("hello", "check") --> False
# find_anagrams("below", "elbow") --> True

# Python3 program for the above approach
from collections import Counter

# function to check if two strings are
# anagram or not
def check(s1, s2):

	# implementing counter function
	if(Counter(s1) == Counter(s2)):
		print("True")
	else:
		print("False.")


# driver code
s1 = input("Enter a word:") 
s2 = input("Enter a word:")
check(s1, s2)

input("Enter any key to quit.")