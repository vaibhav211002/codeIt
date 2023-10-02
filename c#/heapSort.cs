using System;

class HeapSort
{
    public static void Heapify(int[] arr, int n, int i)
    {
        int largest = i;
        int leftChild = 2 * i + 1;
        int rightChild = 2 * i + 2;

        if (leftChild < n && arr[leftChild] > arr[largest])
            largest = leftChild;

        if (rightChild < n && arr[rightChild] > arr[largest])
            largest = rightChild;

        if (largest != i)
        {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            Heapify(arr, n, largest);
        }
    }

    public static void HeapSortFunc(int[] arr)
    {
        int n = arr.Length;

        for (int i = n / 2 - 1; i >= 0; i--)
            Heapify(arr, n, i);

        for (int i = n - 1; i >= 0; i--)
        {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            Heapify(arr, i, 0);
        }
    }

    public static void PrintArray(int[] arr)
    {
        int n = arr.Length;
        for (int i = 0; i < n; i++)
        {
            Console.Write(arr[i] + " ");
        }
        Console.WriteLine();
    }

    public static void Main(string[] args)
    {
        int[] arr = { 12, 11, 13, 5, 6, 7 };
        Console.WriteLine("Original Array:");
        PrintArray(arr);

        HeapSortFunc(arr);

        Console.WriteLine("Sorted Array:");
        PrintArray(arr);
    }
}
