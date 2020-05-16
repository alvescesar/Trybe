let primes = 13;
let verify = 0;

for (i = 0; i < primes; i += 1) {
	if (i % primes === 0) {
		verify += 1;
	}
}

if (verify < 2) {
	console.log(primes + " is a prime number.");
} else {
	console.log(primes + " is not a prime number.");
}