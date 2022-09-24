# Python3 program that counts and returns the number of words in a given text.

def main():
    phrase = input("Enter a sentence:")
    words = phrase.split() #Forget ()
    wordCount = len(words)
    print("The total word count is: %s" % wordCount) #You have to include wordCount in print
main()

input("Enter any key to quit.")