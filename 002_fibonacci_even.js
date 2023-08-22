function fiboEvenSum(n) {
	if (n === 1){
		return 0;
	}
	
	let res = 2
	let first = 0
	let second = 2
	
	while (second <= n)
	{
		let temp = 4 * second + first
		
		if (temp > n) {
			break
		}
		res += temp
		first = second
		second = temp
	}
	return res
}
