base  = 3
side  = base*base

# pattern for a baseline valid solution
def pattern(r,c): return (base*(r%base)+r//base+c)%side

# randomize rows, columns and numbers (of valid base pattern)
from random import sample
def shuffle(s): return sample(s,len(s)) 
rBase = range(base) 
rows  = [ g*base + r for g in shuffle(rBase) for r in shuffle(rBase) ] 
cols  = [ g*base + c for g in shuffle(rBase) for c in shuffle(rBase) ]
nums  = shuffle(range(1,base*base+1))

# produce board using randomized baseline pattern
board = [ [nums[pattern(r,c)] for c in cols] for r in rows ]

for line in board: print(line)

# Hello


# [4, 7, 5, 8, 6, 2, 9, 1, 3]
# [2, 6, 8, 9, 1, 3, 5, 7, 4]
# [3, 1, 9, 5, 7, 4, 8, 6, 2]
# [6, 8, 4, 2, 9, 1, 3, 5, 7]
# [7, 5, 3, 4, 8, 6, 2, 9, 1]
# [1, 9, 2, 3, 5, 7, 4, 8, 6]
# [5, 3, 1, 7, 4, 8, 6, 2, 9]
# [8, 4, 7, 6, 2, 9, 1, 3, 5]
# [9, 2, 6, 1, 3, 5, 7, 4, 8]