def partition(arr, low, high):
    pi = arr[high]
    i = (low -1)
    for j in range(low,high):
        if arr[j]< pi:
            i = i+1
            arr[i],arr[j] = arr[j],arr[i]
            
    arr[i+1],arr[high]= arr[high],arr[i+1]
    return (i+1)

def quickSort(arr,low,high):
    while low < high:
        pi = partition(arr,low,high)
        if( pi-low < high - pi):
            quickSort(arr, low, pi-1)
        else:
            quickSort(arr, pi+1, high)
        low = pi+1; 
        #quickSort(arr,pi+1, high)


arr = [10, 7, 8, 9, 1, 5] 
n= len(arr)
quickSort(arr, 0,n-1)
print(arr)
