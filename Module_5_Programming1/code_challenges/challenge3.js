// https://codepen.io/dianagaona/pen/bGpwvRx

let names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

const firstName = [];
const lastName = [];

for(let i = 0; i < names.length; i++){
  let temp = names[i].split(" ");
  firstName.push(temp[0])
  lastName.push(temp[1])
}

console.log(firstName)
console.log(lastName)