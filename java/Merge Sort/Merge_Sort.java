public class Merge_Sort {

    //Merge Sort   Time Complexity --> O(nlogn) || Space Complexity --> O(n)

    // Main function that sorts arr[si...ei] using
    // merge()
    //in this function we are dividing array till single element
    public static void mergeSort(int[] arr, int si, int ei){  
        
        // Base Case
        if(si>=ei){
            return;
        }

        // Find the middle point
        int mid=si+(ei-si)/2;

        // Sort left and right subarrays
        mergeSort(arr, si, mid);
        mergeSort(arr, mid+1, ei);

        // Merge the sorted halves
        merge(arr, si, mid, ei);
    }

    // Merges two subarrays of arr[].
    // First subarray is arr[si...mid]
    // Second subarray is arr[mid+1...ei]
    public static void merge(int[] arr, int si, int mid, int ei){

        // Make a temp array to merge the sorted subarrays
        int[] temp = new int[ei-si+1];

        // Initial indices of first and second subarrays
        int i=si;
        int j=mid+1;

        // Initial index of merged subarray array
        int k=0;
        while(i<=mid && j<=ei){

            if(arr[i]<arr[j]){
                temp[k]=arr[i];
                k++;
                i++;
            }
            else{
                temp[k]=arr[j];
                k++;
                j++;
            }

        }

        // Copy remaining elements of subarrays if any
        while(i<=mid){
            temp[k]=arr[i];
            i++;
            k++;
        }

        while(j<=ei){
            temp[k]=arr[j];
            k++;
            j++;
        }

        //copying temp array to original array
        for(k=0,i=si;k<temp.length;i++,k++){  
            arr[i]=temp[k];
        }
    }

    //Driver(Main) function
    public static void main(String[] args) {
        int[] arr = {2,3,5,-1,6,8,8,7,9};
        mergeSort(arr, 0 , arr.length-1);

        for(int i=0;i< arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }

}