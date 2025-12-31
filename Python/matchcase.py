# simple example
day = int( input("Enter day number"))
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesady")
    case 3:
        print("Wednesday")
    case _:
        print("Invalid day")
# string example
colour = str(input("Enter Colour"))
match colour:
    case "red":
        print("Stop")
    case "yellow":
        print("Ready")
    case "green":
        print("Go")
    case _:
        print("Unknown Colour")
# Time Greeting
import time
hour = int(time.strftime("%H"))
match hour:
    case h if 1 <= h < 12:
     print("Good Morning")
    case h if 12 <= h < 17:
     print("Good Afternoon")
    case h if 17 <= h < 24:
        print("Good Evening")
    case _:
        print("Invalid Time")
     
      
