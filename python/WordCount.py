paragraph = """This is a sample paragraph. It contains several words, 
sentences, and punctuation marks. You can count the number of words in 
this paragraph using Python."""

#If you want to read from an file
# with open('paragraph.txt', 'r') as file:
#     paragraph = file.read()


# Split the paragraph into words using whitespace as the delimiter
words = paragraph.split()

# Count the number of words
num_words = len(words)

# Print the result
print(f"Number of words in the paragraph: {num_words}")
