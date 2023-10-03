def tower_of_hanoi(n, source, auxiliary, target):
    # Base case: If there's only one disk, move it from the source to the target peg.
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return

    # Move (n-1) disks from the source peg to the auxiliary peg using the target peg as a temporary peg.
    tower_of_hanoi(n - 1, source, target, auxiliary)

    # Move the largest disk (disk n) from the source peg to the target peg.
    print(f"Move disk {n} from {source} to {target}")

    # Move the (n-1) disks from the auxiliary peg to the target peg using the source peg as a temporary peg.
    tower_of_hanoi(n - 1, auxiliary, source, target)

# Example usage:
num_disks = 3
tower_of_hanoi(num_disks, 'A', 'B', 'C')
