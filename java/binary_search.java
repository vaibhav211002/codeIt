import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BinarySearch bs = new BinarySearch();

        System.out.print("Enter the size:");
        int n = sc.nextInt();
        int[] A = new int[n];

        System.out.print("Enter the elements (in sorted order):");
        for (int i = 0; i < n; i++) {
            A[i] = sc.nextInt();
        }

        System.out.print("Enter the item to be searched:");
        int item = sc.nextInt();

        int result = bs.binarySearch(A, item);

        if (result != -1) {
            System.out.println(item + " is found at position " + (result + 1));
        } else {
            System.out.println("Element " + item + " not in the list");
        }
    }

    int binarySearch(int A[], int item) {
        int beg = 0, end = A.length - 1;

        while (beg <= end) {
            int mid = beg + (end - beg) / 2;

            if (A[mid] == item) {
                return mid; // Element found, return the index
            } else if (item > A[mid]) {
                beg = mid + 1; // Item is in the right half
            } else {
                end = mid - 1; // Item is in the left half
            }
        }

        return -1; // Element not found
    }
}
