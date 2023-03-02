const exchangeRate = 127.60;
const ksh = process.argv[2];

// if (!ksh) {
//     console.log("kENYAN SHILLING TO USD CONVERTER")
//     console.log("Enter amount in Kenyan shilling: ")
//     process.exit();
// }

const usd = (ksh / exchangeRate).toFixed(2);

console.log( `${ksh} KSH is equivalent to $${usd} USD.`);
