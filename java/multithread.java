import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Square implements Runnable {
    int n;

    Square(int n) {
        this.n = n;
    }

    public void run() {
        int s = this.n * this.n;
        System.out.println("Square of " + this.n + " = " + s);
    }
}

class Cube implements Runnable {
    int n;

    Cube(int n) {
        this.n = n;
    }

    public void run() {
        int c = this.n * this.n * this.n;
        System.out.println("Cube of " + this.n + " = " + c);
    }
}

public class Multithread {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How Many Random Integers needed : ");
        int x = sc.nextInt();
        System.out.print("Set the limit up to which random numbers should be generated : ");
        int l = sc.nextInt();
        sc.close();

        ExecutorService executor = Executors.newFixedThreadPool(x);

        for (int i = 10; i < 121; i++) {
            Random random = new Random();
            int ranInt = random.nextInt(l);
            System.out.println("The random integer: " + ranInt);

            if (ranInt % 2 == 0) {
                executor.submit(new Square(ranInt));
            } else {
                executor.submit(new Cube(ranInt));
            }

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.err.println(e);
            }
        }

        executor.shutdown();
    }
}
