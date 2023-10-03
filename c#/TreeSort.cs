using System;

// Creation of nodes and iniliasing them to Null
class TreeNode
{
    public int Value;
    public TreeNode LeftNode;
    public TreeNode RightNode;

    public TreeNode(int value)
    {
        Value = value;
        LeftNode = null;
        RightNode = null;
    }
}

// For Tree Sorting, we have to insert values into a Binary Search Tree as 
// to sort the given array by performing an in-order traversal
class BinarySearchTree
{
    private TreeNode root;

    public BinarySearchTree()
    {
        root = null;
    }

    public void Insert(int value)
    {
        root = InsertRec(root, value);
    }

    private TreeNode InsertRec(TreeNode current, int value)
    {
        if (current == null)
        {
            current = new TreeNode(value);
            return current;
        }

        if (value < current.Value)
        {
            current.LeftNode = InsertRec(current.LeftNode, value);
        }
        else if (value > current.Value)
        {
            current.RightNode = InsertRec(current.RightNode, value);
        }

        return current;
    }

    public void InOrderTraversal()
    {
        InOrderTraversal(root);
    }

    private void InOrderTraversal(TreeNode node)
    {
        if (node != null)
        {
            InOrderTraversal(node.LeftNode);
            Console.Write(node.Value + " ");
            InOrderTraversal(node.RightNode);
        }
    }
}

// the main code - takes the array size and the array as an input 
// from the user and and then performs the sorting on it
// it also performs some error handling cases
class TreeSortAlgorithm
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter the number of elements in the array:");
        if (!int.TryParse(Console.ReadLine(), out int n) || n <= 0)
        {
            Console.WriteLine("The size should be a positive integer.");
            return;
        }

        int[] arrayToSort = new int[n];

        Console.WriteLine("Enter the elements of the array :");
        string[] inputArray = Console.ReadLine().Split(' ');

        if (inputArray.Length != n)
        {
            Console.WriteLine("Invalid input. Please enter exactly " + n + " elements.");
            return;
        }

        for (int i = 0; i < n; i++)
        {
            arrayToSort[i] = int.Parse(inputArray[i]);
        }

        BinarySearchTree binarySearchTree = new BinarySearchTree();

        foreach (int number in arrayToSort)
        {
            binarySearchTree.Insert(number);
        }

        Console.WriteLine("Sorted Array using Tree Sort :");
        binarySearchTree.InOrderTraversal();
    }
}
