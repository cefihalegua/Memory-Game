//randomly choosing pictures and distributing the cards
var numberOfCards = 12; //total number of cards in the board
var numberOfPictures = 10; //number of different pictures to choose cards
var pictures = [];
function choosingPictures() {
    var picturesArray = [];
    for (let i = 0; i < numberOfPictures; i++) {
        picturesArray[i] = i;
    }
    var chosenPictures = [];
    for (let j = 0; j < (numberOfCards / 2); j++) {
        let chosenIndex = Math.floor(Math.random() * picturesArray.length);
        chosenPictures[j] = picturesArray[chosenIndex];
        chosenPictures[j + (numberOfCards / 2)] = picturesArray[chosenIndex];
        picturesArray.splice(chosenIndex, 1);
    }
    distributeCards(chosenPictures);
}
function distributeCards(chosenPictures) {
    var pictureDistributionOrder = [];
    for (let k = 0; k < numberOfCards; k++) {
        let chosenIndex = Math.floor(Math.random() * chosenPictures.length);
        pictureDistributionOrder[k] = chosenPictures[chosenIndex];
        chosenPictures.splice(chosenIndex, 1);
    }
    for (let n = 0; n < numberOfCards; n++) {
        var front = $("<img/>");
        front.addClass("no-show");
        front.attr("src", "./images/ca" + (pictureDistributionOrder[n] + 1) + ".jpg");
        front.attr("id", "image" + (n + 1));
        front.attr("value", "card" + (n + 1));
        front.on("click", flipCard);
        $("#card" + (n + 1)).append(front);

        var back = $("<img/>");
        back.addClass("card");
        back.attr("src", "./images/backcard.jpg");
        back.attr("id", "back" + (n + 1));
        back.attr("value", "card" + (n + 1));
        back.on("click", flipCard);
        $("#card" + (n + 1)).append(back);
    }
}
choosingPictures();

//flipping card when cliked on

function flipCard() {
    var card1Front;
    var card1Back;
    var card2Front;
    var card2Back;
    var openCardCount = 0;
    if (openCardCount == 0) {
        var divName = this.getAttribute("value");
        var divImages = $("#" + divName + " img"); //1:back-side 0:front-side
        divImages[1].setAttribute("class", "no-show"); //hide back-side
        divImages[0].setAttribute("class", "card"); //show front-side
        card1Front = divImages[0].id;
        card1Back = divImages[1].id;
        openCardCount = 1;
    }
    else if (openCardCount == 1) {
        var divName = this.getAttribute("value");
        var divImages = $("#" + divName + " img"); //1:back-side 0:front-side
        divImages[1].setAttribute("class", "no-show"); //hide back-side
        divImages[0].setAttribute("class", "card"); //show front-side
        card2Front = divImages[0].id;
        card2Back = divImages[1].id;
        openCardCount = 0;
        compareOpenCards(card1Front, card1Back, card2Front, card2Back);
    }
}
