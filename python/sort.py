import array as arr

arr = arr.array('i', [93, 33, 44, 15])

for j in range(len(arr)):
    if arr[0] > arr[1]:
        arr[0], arr[1] = arr[1], arr[0]

    if arr[1] > arr[2]:
        arr[1], arr[2] = arr[2], arr[1]

    if arr[2] > arr[3]:
        arr[2], arr[3] = arr[3], arr[2]

print(arr)

# Output
# array('i', [15, 33, 44, 93])