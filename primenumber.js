function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not a prime number";

        }


    }
    return "Prime Number";

}
var result = isPrime(7);
console.log(result);