const exchangeRate = 127.60;
const ksh = process.argv[2];

if (!ksh) {
    console.log("Please Enter amount in Kenyan shilling to convert to USD.")
    process.exit();
}

const usd = (ksh / exchangeRate).toFixed(2);

console.log( `${ksh} KSH is equivalent to $${usd} USD.`);
