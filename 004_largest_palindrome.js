/*1. find the range: [10 ** (n - 1), 10 ** n - 1]
2. calculate all possible product
3. check for palindromes

reverse a string in javascript:
function reverseString(str) {
	return str.split('').reverse().join('');
}

a palindrome:
num.toString() === num.toString().split('').reverser('').join('')

or a palindrome = s + s.toString().split('').reverser('').join('')*/

// solution 1? :
function largestPalindromeProduct(n) {
	let upper = Math.pow(10, n) - 1;
	let lower = Math.pow(10, n - 1);
	
	for (let i = upper; i >= lower; i--){
		const s = i.toString();
		const p = parseInt(s + s.split('').reverse().join(''));

		for (let j = upper; j * j > p; j--) {
			if (p % j === 0) {
				return p;
			}
		}
	}
	return 9;
}
