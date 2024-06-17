function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


console.log(gcd(48, 18)); // Output: 6
console.log(gcd(101, 103)); // Output: 1
console.log(gcd(56, 98)); // Output: 14
console.log(gcd(270, 192)); // Output: 6
