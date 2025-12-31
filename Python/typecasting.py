#explicit type casting hame khud karna padta hai conversion
x = "1"
y ="5"
print(x + y)
#jaise isme hamne dekha ki output 15 aa raha hai compiler ko nahi pata ki kya karna hai usne 2 string print kardi
# to hamen khud decide karna hoga ki kya karna hai 
print(int(x) + int(y))
# ab hamara output 6 aa jayega
# Implicit typecasting me automatically convert ho jaati hai
a = 10 #int
b = 2.5 #float
print (a + b) # python automatically converts into float

