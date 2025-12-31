# Strings are immutable means once you create you can't change their content.
# We learn types of methods in this program
# 1. upper() change values of a string to upper 
str = "Nawaz"
print(str.upper())
# 2. lower() change value of a string to lower
str = "NaWaZ"
print(str.lower())
# 3.rstrip() removes extra spaces or characters from right side of a string
str = "Nawaz  !!!"
print(str.rstrip("!"))
# 4. replace() interchange one word or character into another in a string
str = "I like tea"
print(str.replace("tea","coffee"))
# 5. split() break string into a part and return them as a list
str = "I like tea"
print(str.split()) # by default split starts from spaces
str = "Banana, Apple, Mango"
print(str.split(",")) # that is split by character jahan comma hai wahan se split katr dega 
str = "banana  mango apple guava"
print(str.split(" ", 1)) # ye kya karta jitni value denge utne alag kar dega aur baaki as it is
# 6. capitalize()
str = "python"
print(str.capitalize()) # capitalize string ka first letter capital kar deta hai aur baaki small
str = "pYtHON IS fUN"
print(str.capitalize())
# 7. center()
str = "Python"
print(str.center(10))# string ko center men print karta hai
print(str.center(10,"'")) # string ke aage peechhe jo ham chatracter dete hain wahi print kar deta hai
# 8. count()
str = "Banana,Apple,Grapes,Banana"
print(str.count("a"))
print(str.count("Banana"))# count hame batata hai ki ek string men ek character ya word kitni baar aya hai
