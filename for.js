for (let i = 0; i < 6; i++) {
  console.log(i);
}

const word = "saMSUng";

let convertedWord = "";

// for(let i = 0; i < word.length; i++) {
//     if(word[i] === word[i].toUpperCase()) {
//         convertedWord += word[i].toLocaleLowerCase();
//     }
//     else {
//         convertedWord += word[i].toUpperCase();
//     }
// }

for (let i = 0; i < word.length; i++) {
  if (i === 0) {
    convertedWord += word[i].toUpperCase();
  }
  else {
    convertedWord += word[i].toLowerCase();
  }
}

console.log(convertedWord);
