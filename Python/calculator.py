num1 = float(input("enter first num:"))
num2 = float(input ("enter second num:"))
print("choose operation you want perform:")
print("+ Addtion")
print("- Subtraction")
print("/ Division")
print("* Multiplication")
operator = input("enter operator(+,-,*,/):")
if operator == "+":
    print("Result:", num1 + num2) 
elif operator == "-":
        print("Result:", num1 - num2)
elif operator == "*":
    print("Result:",num1 * num2)
elif operator == "/":
    if num2!= 0:
     print("Result:", num1 / num2)
    else:
        print("Error: Division by zero")

else:
    print("Invalid operator")
