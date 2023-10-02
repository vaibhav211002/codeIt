#  open pyramid of size 5:
#      *
#     * *
#    *   *
#   *     *
#  * * * * *

n=int(input())
space=n-1
mid_space=1
for i in range(1,n):
	for j in range(space):
		print(" ",end='')				#spaces before
	if i==1:
		print("*",end='')              	#first layer
	else:                               #middle layers
		print("*",end='')
		for j in range(mid_space):
			print(" ",end='')
		print("*",end='')
		mid_space+=2
	space-=1
	print("\n",end='')
for i in range(n):
	print("* ",end='');						#last layer