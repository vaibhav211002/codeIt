import heapq

# Define a class for the nodes in the grid
class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.g = float('inf')  # Cost from start node to this node
        self.h = None  # Heuristic (estimated cost from this node to goal node)
        self.parent = None  # Parent node

    def __lt__(self, other):
        # Comparison method for priority queue
        return (self.g + self.h) < (other.g + other.h)

# Define a function to calculate the Manhattan distance heuristic
def heuristic(node, goal):
    return abs(node.x - goal.x) + abs(node.y - goal.y)

# Define the A* algorithm
def astar(grid, start, goal):
    open_set = []
    closed_set = set()

    start.g = 0
    start.h = heuristic(start, goal)
    heapq.heappush(open_set, start)

    while open_set:
        current = heapq.heappop(open_set)

        if current == goal:
            path = []
            while current:
                path.append((current.x, current.y))
                current = current.parent
            return path[::-1]

        closed_set.add(current)

        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            x, y = current.x + dx, current.y + dy

            if 0 <= x < len(grid) and 0 <= y < len(grid[0]) and grid[x][y] != 1:
                neighbor = Node(x, y)

                if neighbor in closed_set:
                    continue

                tentative_g = current.g + 1

                if tentative_g < neighbor.g:
                    neighbor.parent = current
                    neighbor.g = tentative_g
                    neighbor.h = heuristic(neighbor, goal)

                    if neighbor not in open_set:
                        heapq.heappush(open_set, neighbor)

    return None

# Example grid with 0s as open cells and 1s as obstacles
grid = [
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
]

# Define the start and goal nodes
start = Node(0, 0)
goal = Node(4, 5)

# Find the path using A* algorithm
path = astar(grid, start, goal)

if path:
    print("Path found:")
    for x, y in path:
        print(f"({x}, {y})")
else:
    print("No path found.")
