// https://codepen.io/dianagaona/pen/qBZaoXa

let quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's car, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me I'm out for presidentts to represent me, I'm out for dead presidents to represent me, ";

let quoteArray = quote.split(" ")

for(let i = 0; i < quoteArray.length; i++){
  if(quoteArray[i].includes("s")||quoteArray[i].includes("S")){
    let temp = quoteArray[i].replace(/s/gi, "$");
    quoteArray[i] = temp;
  }
}

let newQuote = quoteArray.join(" ");

console.log(newQuote)
