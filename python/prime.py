num = int(input("Enter a number: "))
flag = True

if num==1:
    print("Its not a prime number.")
elif num>1:
    for i in range(2,num):
        if(num%i==0):
            flaf = True
            break

    if flag:
        print(num, "is not a prime number.")
    else:
        print(num, "is a prime number.")
