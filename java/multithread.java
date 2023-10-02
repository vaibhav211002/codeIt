//Code by Arun Hiremath
import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.*;

class Square implements Callable<Integer> {
    private final int n;

    public Square(int n) {
        this.n = n;
    }

    @Override
    public Integer call() {
        return n * n;
    }
}

class Cube implements Callable<Integer> {
    private final int n;

    public Cube(int n) {
        this.n = n;
    }

    @Override
    public Integer call() {
        return n * n * n;
    }
}

public class Multithread {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How Many Random Integers needed: ");
        int x = sc.nextInt();
        System.out.print("Set the limit up to which random numbers should be generated: ");
        int l = sc.nextInt();
        sc.close();

        ExecutorService executor = Executors.newFixedThreadPool(x);
        CompletionService<Integer> completionService = new ExecutorCompletionService<>(executor);

        for (int i = 10; i < 121; i++) {
            Random random = new Random();
            int ranInt = random.nextInt(l);
            System.out.println("The random integer: " + ranInt);

            Callable<Integer> task = (ranInt % 2 == 0) ? new Square(ranInt) : new Cube(ranInt);
            completionService.submit(task);
        }

        executor.shutdown();

        try {
            for (int i = 0; i < 111; i++) {
                Future<Integer> future = completionService.take();
                int result = future.get();
                System.out.println("Result: " + result);

                // Sleep if needed
                Thread.sleep(1000);
            }
        } catch (InterruptedException | ExecutionException e) {
            System.err.println(e);
        }
    }
}
