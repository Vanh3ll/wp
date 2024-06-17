function gradient(f, p) {
    const h = 1e-6; // Step size for numerical differentiation

    // Initialize an array to store gradients
    let grad = [];

    // Compute partial derivatives using central difference method
    for (let i = 0; i < p.length; i++) {
        let dp = p.slice(); // Copy point p
        dp[i] += h; // Increment i-th coordinate by h
        let df = f(dp) - f(p); // Compute change in function value
        grad[i] = df / h; // Approximate gradient component
    }

    return grad;
}

// Example usage:
// Define a function f(x, y) = x^2 + y^2
function f(x) {
    return x[0] * x[0] + x[1] * x[1];
}

// Compute gradient of f at point (1, 2)
let point = [1, 2];
let grad = gradient(f, point);
console.log("Gradient of f at point", point, ":", grad);
