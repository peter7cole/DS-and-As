// PROBLEM DOMAIN
// Add up the sum of all numbers from one up to and including some number n.

// There are two common solutions

// The first uses a for loop

function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// The second uses the sum formula

function addUpToWithFormula(n) {
	return (n * (n + 1)) / 2;
}

// Test

const N = 6;
console.log('addUpTo:', addUpTo(N));
console.log('addUpToWithFormula:', addUpToWithFormula(N));
