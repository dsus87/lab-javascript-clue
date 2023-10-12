// ITERATION 1

// Suspects Array

const suspectsArray = [ 
    {firstName: 'Jacob', lastName: 'Green', occupation: 'Entrepreneur', age: 45, description: 'He has a lot of connections', image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', color: 'green'},
    {firstName: 'Doctor', lastName: 'Orchid', occupation: 'Scientist', age: 26, description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', color: 'white'},
    {firstName: 'Victor', lastName: 'Plum', occupation: 'Designer', age: 22, description: 'Billionaire video game designer',image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',color: 'purple'},
    {firstName: 'Kasandra', lastName: 'Scarlet', occupation: 'Actor', age: 31, description: 'She is an A-list movie star with a dark past',image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', color: 'red'},
    {firstName: 'Eleanor', lastName: 'Peacock', occupation: 'Socialité', age: 36, description: 'She is from a wealthy family and uses her status and money to earn popularity',image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', color: 'blue'},
    {firstName: 'Jack', lastName: 'Mustard', occupation: 'Retired Football player', age: 62, description: 'He is a former football player who tries to get by on his former glory',image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', color: 'yellow'},
]

;

// Rooms Array

const roomsArray = [
    {name:'Dining Room'}, 
    {name:'Conservatory'},
    {name:'Kitchen'}, 
    {name:'Study'},
    {name:'Library'}, 
    {name:'Billiard Room'},
    {name:'Lounge'},
    {name:'Ballroom'}, 
    {name:'Hall'}, 
    {name:'Spa'}, 
    {name:'Living Room'}, 
    {name:'Observatory'}, 
    {name:'Theater'},
    {name:'Guest House'},
    {name:'Patio'}
]

// Weapons Array

const weaponsArray = [
    {name:'rope', weight: 10},
    {name:'knife', weight: 8},
    {name:'candlestick', weight: 2},
    {name:'dumbbell', weight: 30},
    {name:'poison', weight: 2},
    {name:'axe', weight: 15},
    {name:'bat', weight: 13},
    {name:'trophy', weight: 25},
    {name:'pistol', weight: 20},
];


// ITERATION 2

// function selectRandom(suspectsArray,roomsArray,weaponsArray) {
//      let randomIndex1 = Math.floor(Math.random()*suspectsArray.length)
//      let randomSuspectsElement = suspectsArray[randomIndex1];
  
//      let randomIndex2 = Math.floor(Math.random()*roomsArray.length)
//      let randomRoomsElement = roomsArray[randomIndex2]

//      let randomIndex3 = Math.floor(Math.random() * weaponsArray.length)
//      let randomWeaponsElement = weaponsArray[randomIndex3]

//      return { randomSuspectsElement,randomRoomsElement, randomWeaponsElement,}
 
//  }

// let randomSelection = selectRandom(suspectsArray, roomsArray, weaponsArray)

// console.log(randomSelection);

function selectRandom(suspectsArray,roomsArray,weaponsArray) {    // Define a function named 'selectRandom' that takes three arrays as input: 'suspectsArray', 'roomsArray', and 'weaponsArray'.
    let allCardDecks =  [suspectsArray, roomsArray, weaponsArray]       // Create an array called 'allCardDecks' that contains the three input arrays.
    let randomCardDeckIndex = Math.floor(Math.random()*allCardDecks.length)   //Generate a random index number by multiplying a random decimal between 0 and 1 with the length of 'allCardDecks'. 
                                                                             // Then, round down the result to the nearest whole number using 'Math.floor'.
    let selectedCardDeckIndex = allCardDecks[randomCardDeckIndex]    // Get the selected card deck from 'allCardDecks' using the 'randomCardDeckIndex'.
    let randomIndex =  Math.floor(Math.random() * selectedCardDeckIndex.length)  //  Generate another random index within the selected card deck.
    return selectedCardDeckIndex[randomIndex];  // Return the randomly selected card from the selected card deck.

}

const randomCard = selectRandom(suspectsArray, roomsArray, weaponsArray); // Call the 'selectRandom' function with the three arrays, and store the result in a constant variable 'randomCard'.

console.log(randomCard);


function selectRandom(cardDeck) {  // Define a new version of the 'selectRandom' function that takes a single input 'cardDeck'.
    const randomIndex = Math.floor(Math.random() * cardDeck.length) //  Generate a random index within 'cardDeck'.
    return cardDeck[randomIndex]; // Return the randomly selected card from 'cardDeck'.

}

function pickMystery() {

    const mystery = {     //   Create an object called 'mystery' with three properties: 'suspect', 'weapon', and 'room'.
        suspect: selectRandom(suspectsArray),   // Assign a randomly selected suspect, weapon, and room by calling the 'selectRandom' function with the respective arrays.
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };

    return mystery;
}


console.log(pickMystery());



// ITERATION 3

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope; // Destructure the envelope object to get the suspect, weapon, and room.

    const message = `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`
    // Construct the revealing message with the correct format.

    return message
}

const mystery2 = pickMystery() // Get a mystery object from the pickMystery function.
const message = revealMystery(mystery2) // Get the revealing message.
console.log(message) // Output the revealing message.




