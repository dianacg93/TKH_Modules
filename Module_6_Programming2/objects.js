/**
 * Object 1
 */
const porsche = {
    name: "Cayenne E-Hybrid Coupe",
    year: 2020,
    price: 86400,
    bodyStyle: "SUV",
    purchased: false,
    get model() {
        console.log(this.name)
    },
    set newPrice(newPrice){
        this.price = newPrice
    },
    welcomeNewCar: function() {
      console.log(this.name)
    }

}

console.log(porsche.welcomeNewCar())

porsche.newPrice = 45
console.log(porsche.price)


/**
 * Obejct 2
 */
const barcelona = {
    teamName : "FC Barcelona",
    numberOfPlayers : 19, 
    famousPlayers: ["Lionel Messi", "Gerard Pique", "Luis Suarez"],
    nickname: "Barça",
    get numOfPlayers() {
        console.log(this.numberOfPlayers)
    },
    set newNickname (newName){
        this.nickname = newName;
    },
    randomPlayer: function() {
        console.log(this.famousPlayers[Math.floor(Math.random() * this.famousPlayers.length)])
    }
}

console.log(barcelona.randomPlayer())

/**
 * Object 3
 */
const fox = {
    family: "Canidae",
    numberOfSpecies: 12,
    species: ["red fox", "ruppell's fox", "corsac fox", "bengal fox", "artic fox", "blandford's fox", "cape fox", "fennec fox"],
    isMammal: true,
    favoriteFox:"",
    get numOfSpecies() {
        return this.numberOfSpecies;
    },
    set faveFox(fox) {
        this.favoriteFox = fox;
    },
    selectRandomFox: function(){
        console.log(this.species[Math.floor(Math.random() * this.species.length)])
    }
}

console.log(fox.selectRandomFox())

fox.faveFox = "vulpe"

console.log(fox.favoriteFox)