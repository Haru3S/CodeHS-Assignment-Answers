"""
██╗  ██╗ █████╗ ██████╗ ██╗   ██╗██████╗ ███████╗
██║  ██║██╔══██╗██╔══██╗██║   ██║╚════██╗██╔════╝
███████║███████║██████╔╝██║   ██║ █████╔╝███████╗
██╔══██║██╔══██║██╔══██╗██║   ██║ ╚═══██╗╚════██║
██║  ██║██║  ██║██║  ██║╚██████╔╝██████╔╝███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
                                                 
"""

"""
=--------------------------------=
|       /*/*/*/*/*/*/*/*/*/*/    |
|           Better Sum           |
|       /*/*/*/*/*/*/*/*/*/*/    |
=--------------------------------=
"""

## \/ \/ User Input \/ \/
start = int(input("Enter the first number: "))
end = int(input("Enter the second number: "))

## "Total" Variable
total = 0

## Varaible called "num" and the desired start and end suggested by the user added plus 1.
for num in range(start, end + 1):
    total += num

# Tell the user their numbers and output it.
print(f"The sum of all numbers from {start} to {end} is: {total}")
