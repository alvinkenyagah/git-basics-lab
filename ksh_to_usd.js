const exchangeRate = 127.60;
const ksh = process.argv[2];

const usd = (ksh / exchangeRate).toFixed(2);

console.log( `${ksh} KSH is equivalent to $${usd} USD.`);
