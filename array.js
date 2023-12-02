// const friends = ["Johny", "David", "Benny"];
// console.log(friends.length);
// const lastIndex = friends.length -1;
// console.log(lastIndex);
// console.table(friends);

const friends = ["Sofia", "Bogdan", "Igor", "Volodimir"];
// for (let i = 0; i < friends.length; i++) {
//     friends[i] += `-${i}`;
// }

for (let friend of friends) {
  console.log(friend.toUpperCase());
}

console.table(friends);

const cart = [54, 33, 465, 32, 45, 21, 35];
let result = 0;
// for (const value of cart) {
//     result += value;
// }
// console.log(result);
for (const value of cart) {
  if (value % 2 !== 0) {
    console.log("Skip this operation", value);
    continue;
  } else {
    console.log(`${value} - is even`);
    result += value;
  }
  console.log(result);
}


const numbers = [51, 18, 13, 24, 7, 85, 19];

let lowestNumber = numbers[0];

for (const number of numbers) {
  if (number < lowestNumber) {
    lowestNumber = number;
  }
}

console.log("The lowest number is:", lowestNumber);


const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

let userLoggedIn = false;

for (const login of logins) {
  if (login === loginToFind) {
    userLoggedIn = true;
    break; 
  }
}

if (userLoggedIn) {
  console.log('User is logged in.');
} else {
  console.log('User is logged out.');
}