# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️
#Matz is nice and so we are nice! :D

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def how_odd number
    if number % 2 == 0
        "#{number} is even"
    else
        "#{number} is odd"
    end
end

p how_odd reposts1
p how_odd reposts2
p how_odd reposts3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def delete_Old_MacDonald string
    string.delete "aeiou"
end

p delete_Old_MacDonald beatles_album1
p delete_Old_MacDonald beatles_album2
p delete_Old_MacDonald beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def flip_flop string
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end

p flip_flop palindrome_test_case1
p flip_flop palindrome_test_case2
p flip_flop palindrome_test_case3