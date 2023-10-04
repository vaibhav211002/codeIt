#include <stdio.h>

// Structure to represent a process
struct Process
{
    int process_id;      // Process ID
    int arrival_time;    // Arrival time
    int burst_time;      // Burst time
    int completion_time; // Completion time
    int turnaround_time; // Turnaround time
    int waiting_time;    // Waiting time
};

// Function to calculate the completion times of processes using FCFS
void calculateCompletionTime(struct Process processes[], int n)
{
    int current_time = 0; // Initialize current time to 0

    for (int i = 0; i < n; i++)
    {
        // Set the completion time for the current process
        processes[i].completion_time = current_time + processes[i].burst_time;

        // Update the current time to the completion time of the current process
        current_time = processes[i].completion_time;
    }
}

// Function to calculate the turnaround time of each process
void calculateTurnaroundTime(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        processes[i].turnaround_time = processes[i].completion_time - processes[i].arrival_time;
    }
}

// Function to calculate the waiting time of each process
void calculateWaitingTime(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        processes[i].waiting_time = processes[i].turnaround_time - processes[i].burst_time;
    }
}

int main()
{
    int n; // Number of processes
    printf("Enter the number of processes: ");
    scanf("%d", &n);

    struct Process processes[n]; // Array to store the processes

    // Input the details of each process
    for (int i = 0; i < n; i++)
    {
        printf("Enter details for Process %d:\n", i + 1);
        processes[i].process_id = i + 1;
        printf("Arrival Time: ");
        scanf("%d", &processes[i].arrival_time);
        printf("Burst Time: ");
        scanf("%d", &processes[i].burst_time);
    }

    // Calculate completion times using FCFS
    calculateCompletionTime(processes, n);

    // Calculate turnaround times
    calculateTurnaroundTime(processes, n);

    // Calculate waiting times
    calculateWaitingTime(processes, n);

    // Display the results
    printf("\nProcess\tArrival Time\tBurst Time\tCompletion Time\tTurnaround Time\tWaiting Time\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\t%d\t\t%d\t\t%d\t\t%d\t\t%d\n", processes[i].process_id, processes[i].arrival_time,
               processes[i].burst_time, processes[i].completion_time, processes[i].turnaround_time,
               processes[i].waiting_time);
    }

    return 0;
}
