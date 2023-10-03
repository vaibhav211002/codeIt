fun calculateLCM(firstNumber: Int, secondNumber: Int): Int {
    if (firstNumber == 0 || secondNumber == 0) {
        return 0
    }
    val gcd = findGCD(firstNumber, secondNumber)
    return (firstNumber * secondNumber) / gcd
}

fun findGCD(a: Int, b: Int): Int {
    var gcd = 1
    var i = 1
    val min = if (a < b) a else b

    while (i <= min) {
        if (a % i == 0 && b % i == 0) {
            gcd = i
        }
        i++
    }

    return gcd
}

fun main() {
    println("Enter the first number:")
    val firstNumberInput = readLine()
    val firstNumber = if (firstNumberInput != null) firstNumberInput.toInt() else 0

    println("Enter the second number:")
    val secondNumberInput = readLine()
    val secondNumber = if (secondNumberInput != null) secondNumberInput.toInt() else 0

    val lcm = calculateLCM(firstNumber, secondNumber)

    println("LCM of $firstNumber and $secondNumber is $lcm")
}






