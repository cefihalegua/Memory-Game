//randomly choosing pictures and distributing the cards
var numberOfCards = 12; //total number of cards in the board
var numberOfPictures = 10; //number of different pictures to choose cards
var pictures = [];
function choosingPictures() {
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
    distributeCards(chosenPictures);
}
function distributeCards(chosenPictures) {
    var pictureDistributionOrder = [];
    for(let k=0; k<numberOfCards; k++) {
        let chosenIndex = Math.floor(Math.random()*chosenPictures.length);
        pictureDistributionOrder[k] = chosenPictures[chosenIndex];
        chosenPictures.splice(chosenIndex, 1);
    }
    for (let n=0; n<numberOfCards; n++) {
        $("#card" + (n+1)).prepend("<img class='card-front' id='image" + (n+1) + "' src='./images/ca" + (pictureDistributionOrder[n] + 1) + ".jpg' />");
        $("#card" + (n+1)).prepend("<img class='card-back' id='back" + (n+1) + "' src='./images/backcard.jpg' />");
    }
}
choosingPictures();