import time
hour = int(input("Enter hour(0-23):"))
if hour < 12:
    print("Good Morning")
elif hour < 17:
    print("Good Afternoon")
else:
    print("Good Evening")
    # if we want to give all (hours, minute, second)
import time
time_input = input("Enter Time(HH:MM):")
hour = int(time_input.split(":")[0])
if hour < 12:
    print("Good Morning")
elif hour < 17:
    print("Good Afternoon")
else:
    print("Good Evening")