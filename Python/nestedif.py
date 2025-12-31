age = 20
citizen = True
if age >= 18:
    if citizen:
        print("Eligible For Vote")
    else:
        print("Not a citizen")
#other conditional operators
a = 10
b = 20
print("a is greater") if a > b else print("b is greater")
# This is Short hand if-else (Ternary Operator)
if a < b: print("b is greater than a")