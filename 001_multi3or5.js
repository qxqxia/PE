function mutiplesOf3and5(number) {
	let res = 0;
	let n = 0;

	while (++n < number)
	{
		if (n % 3 == 0 || n % 5 == 0)
			res += n;
	}
	return res;
}
