var num = 33721;

var result =1;

result *= num % 10;

num = (num - num %10 ) / 10;

result *= num % 10;

num = (num - num %10 ) / 10;

result *= num % 10;

num = (num - num %10 ) / 10;

result *= num % 10;

num = (num - num %10 ) / 10;

result *= num % 10;

num = (num - num %10 ) / 10;

console.log(result);

alert("cubed result =" + result ** 3);
