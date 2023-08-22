function largestPrimeFactor(n) {
	let res = 0

	while (n % 2 === 0)
	{
		res = 2;
		n /= 2
	}
	let i = 3
	while (i <= Math.sqrt(n))
	{
		while (n % i === 0)
		{
			res = i
			n /= i
		}
		i += 2
	}
	if (n > 2)
	{
		res = n
	}
	return res
}
