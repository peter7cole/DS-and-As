// PROBLEM DOMAIN
// Add up the sum of all numbers from one up to and including some number n.

// There are two common solutions

// The first uses a for loop
// Time: 5n + 2 or 2n, depending
// n additions and n assignments twice, 2 assignments, n comparisons

function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// The second uses the sum formula
// Time: 3
// 3 simple operations, regardless of the size of n (multiplication, addition, division)

function addUpToWithFormula(n) {
	return (n * (n + 1)) / 2;
}

// Test

const N = 6;
console.log('addUpTo:', addUpTo(N));
console.log('addUpToWithFormula:', addUpToWithFormula(N));
