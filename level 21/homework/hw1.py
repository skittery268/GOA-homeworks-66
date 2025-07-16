# 1) https://www.codewars.com/kata/57faece99610ced690000165

# დავალება:
# Description:
# Remove all exclamation marks from the end of sentence.

# Examples
# "Hi!"     ---> "Hi"
# "Hi!!!"   ---> "Hi"
# "!Hi"     ---> "!Hi"
# "!Hi!"    ---> "!Hi"
# "Hi! Hi!" ---> "Hi! Hi"
# "Hi"      ---> "Hi"

# შესრულებული დავალება:
def remove(st):
    x = st.rstrip('!')
    return x