"""
IMPORTANT! THIS CODE DOES NOT WORK!
"""

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
|           All Star             |
|       /*/*/*/*/*/*/*/*/*/*/    |
=--------------------------------=
"""

## Player Input
points_per_game = float(input("Enter your points per game: "))
rebounds_per_game = float(input("Enter your rebounds per game: "))
assists_per_game = float(input("Enter your assists per game: "))

## Player Checker
if points_per_game >= 25 or (points_per_game >= 10 and rebounds_per_game >= 10 and assists_per_game >= 10):
    print("You are an all star!")
else:
    print("You are not an all star.")

"""
Hey now, you're an all star
Get your game on, go play
Hey now, you're a rock star
"""
