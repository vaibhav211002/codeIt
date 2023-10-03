#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_TREE_HT 100

// Structure for a Huffman tree node
struct MinHNode {
    char data;
    unsigned freq;
    struct MinHNode *left, *right;
};

// Structure for a priority queue of Huffman nodes
struct MinHeap {
    unsigned size;
    unsigned capacity;
    struct MinHNode **array;
};

// Create a new Huffman tree node
struct MinHNode *newNode(char data, unsigned freq) {
    struct MinHNode *temp = (struct MinHNode *)malloc(sizeof(struct MinHNode));
    temp->left = temp->right = NULL;
    temp->data = data;
    temp->freq = freq;
    return temp;
}

// Create a min heap with a given capacity
struct MinHeap *createMinHeap(unsigned capacity) {
    struct MinHeap *minHeap = (struct MinHeap *)malloc(sizeof(struct MinHeap));
    minHeap->size = 0;
    minHeap->capacity = capacity;
    minHeap->array = (struct MinHNode **)malloc(minHeap->capacity * sizeof(struct MinHNode *));
    return minHeap;
}

// Function to swap two min heap nodes
void swapMinHeapNode(struct MinHNode **a, struct MinHNode **b) {
    struct MinHNode *t = *a;
    *a = *b;
    *b = t;
}

// Heapify for min heap
void minHeapify(struct MinHeap *minHeap, int idx) {
    int smallest = idx;
    int left = 2 * idx + 1;
    int right = 2 * idx + 2;

    if (left < minHeap->size && minHeap->array[left]->freq < minHeap->array[smallest]->freq)
        smallest = left;

    if (right < minHeap->size && minHeap->array[right]->freq < minHeap->array[smallest]->freq)
        smallest = right;

    if (smallest != idx) {
        swapMinHeapNode(&minHeap->array[smallest], &minHeap->array[idx]);
        minHeapify(minHeap, smallest);
    }
}

// Check if the size of the min heap is 1
int isSizeOne(struct MinHeap *minHeap) {
    return (minHeap->size == 1);
}

// Extract the node with the lowest frequency from the min heap
struct MinHNode *extractMin(struct MinHeap *minHeap) {
    struct MinHNode *temp = minHeap->array[0];
    minHeap->array[0] = minHeap->array[minHeap->size - 1];
    --minHeap->size;
    minHeapify(minHeap, 0);
    return temp;
}

// Insert a node into the min heap
void insertMinHeap(struct MinHeap *minHeap, struct MinHNode *minHeapNode) {
    ++minHeap->size;
    int i = minHeap->size - 1;
    while (i && minHeapNode->freq < minHeap->array[(i - 1) / 2]->freq) {
        minHeap->array[i] = minHeap->array[(i - 1) / 2];
        i = (i - 1) / 2;
    }
    minHeap->array[i] = minHeapNode;
}

// Build the Huffman tree
struct MinHNode *buildHuffmanTree(char data[], int freq[], int size) {
    struct MinHNode *left, *right, *top;
    struct MinHeap *minHeap = createMinHeap(size);

    for (int i = 0; i < size; ++i)
        minHeap->array[i] = newNode(data[i], freq[i]);

    minHeap->size = size;
    while (!isSizeOne(minHeap)) {
        left = extractMin(minHeap);
        right = extractMin(minHeap);
        top = newNode('$', left->freq + right->freq);
        top->left = left;
        top->right = right;
        insertMinHeap(minHeap, top);
    }
    return extractMin(minHeap);
}

// Print the Huffman codes from the Huffman tree
void printHuffmanCodes(struct MinHNode *root, int arr[], int top) {
    if (root->left) {
        arr[top] = 0;
        printHuffmanCodes(root->left, arr, top + 1);
    }
    if (root->right) {
        arr[top] = 1;
        printHuffmanCodes(root->right, arr, top + 1);
    }
    if (!(root->left) && !(root->right)) {
        printf("%c: ", root->data);
        for (int i = 0; i < top; ++i)
            printf("%d", arr[i]);
        printf("\n");
    }
}

// Encode the input text using Huffman coding
void encodeHuffman(struct MinHNode *root, char *input) {
    int len = strlen(input);
    int binaryCode[MAX_TREE_HT] = {0};
    int idx = 0;

    for (int i = 0; i < len; i++) {
        char ch = input[i];
        int found = 0;
        printHuffmanCodes(root, binaryCode, 0);
        printf("\n");
        printf("Encoded Message: ");
        for (int j = 0; j < len; j++) {
            if (input[j] == ch) {
                for (int k = 0; k < MAX_TREE_HT; k++) {
                    printf("%d", binaryCode[k]);
                    binaryCode[k] = 0;
                }
            }
        }
        printf(" ");
    }
}

int main() {
    char data[] = {'a', 'b', 'c', 'd', 'e', 'f'};
    int freq[] = {5, 9, 12, 13, 16, 45};
    int size = sizeof(data) / sizeof(data[0]);
    struct MinHNode *root = buildHuffmanTree(data, freq, size);

    printf("Huffman Codes:\n");
    printHuffmanCodes(root, data, 0);

    char input[] = "abcdef";
    printf("\nInput Text: %s\n", input);

    printf("\nEncoding Result:\n");
    encodeHuffman(root, input);

    return 0;
}
