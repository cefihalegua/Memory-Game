//randomly distributing the cards
var numberOfCards = 12; //total number of cards in the board
var numberOfPictures = 10; //number of different pictures to choose cards
var pictures = [];
function choosePictures() {
    var picturesArray = [];
    for(let i=0; i<numberOfPictures; i++) {
        picturesArray[i] = i;
    }
    var chosenPictures = [];
    for (let j=0; j<(numberOfCards/2); j++) {
        let chosenIndex = Math.floor(Math.random()*picturesArray.length);
        chosenPictures[j] = picturesArray[chosenIndex];
        chosenPictures[j+(numberOfCards/2)] = picturesArray[chosenIndex];
        picturesArray.splice(chosenIndex, 1);
    }
    console.log(chosenPictures);
}
