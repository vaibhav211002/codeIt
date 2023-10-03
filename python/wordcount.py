import re #re here stand for regular expression

def count_words(paragraph):
    # Use regular expression to split the paragraph into words
    words = re.findall(r'\b\w+\b', paragraph)
    
    # Count the number of words
    word_count = len(words)
    
    return word_count

# Example 
paragraph = "This is an example paragraph, and it contains multiple words. Accurate word counting is important."
result = count_words(paragraph)
print("Number of words in the paragraph:", result)
