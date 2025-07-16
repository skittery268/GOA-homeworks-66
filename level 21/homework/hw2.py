# 2) https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

# დავალება:
# Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

# Examples
# "Hi!" --> "H!!"
# "!Hi! Hi!" --> "!H!! H!!"
# "aeiou" --> "!!!!!"
# "ABCDE" --> "!BCD!"

# შესრულებული დავალება:
def replace_exclamation(st): 
    for vowel in "aeiouAEIOU":
        st = st.replace(vowel, "!")
    return st