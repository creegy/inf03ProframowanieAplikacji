// let playAgain = true;


//     const cards = document.querySelectorAll(".card");
//     const ShuffleButt = document.getElementById("shuffleButton");
//     const pickButt = document.getElementById("pickButton");
//     const result = document.getElementById("result");
//     let correctCard;
//     let points;

//     // while (playAgain)

//     function shuffleCards() {
//         cards.forEach((card) => {
//             const position = Math.floor(Math.random() * 3) + 1
//             card.style.order = position;
//             if(card.id === "card1" && position === 1) {
//                 correctCard = card;
//             }
//         });
//         ShuffleButt.disabled = true;
//         pickButt.disabled = true;
//     }

//     function pickCard() {
//         if(this === correctCard) {
//             result.innerText = "*clap clap clap* WON *clap clap clap*";
//             points += 1
//         } else {
//             result.innerText = "you lose, try again";
//         }
        
//     }

//     ShuffleButt.addEventListener("shuffle cards", shuffleCards);
//     pickButt.addEventListener("pick card", pickCard);
//     cards.forEach((card) => card.addEventListener("click", pickCard));

//     for (let i = 0; i<5; i++) {

    

//     shuffleCards();
//     alert("cards shuffled")

//     correctCard = math.floor(math.random() * 3)
//     alert("pick a card")

//     pickCard();
    
    
//     }
// alert("game over")






// const cards = ["ace", "king", "queen"];
// let userScore = 0;

// while(true) {
//     const randomIndex = Math.floor(Math.random() * cards.length);
//     const random = cards[randomIndex];

//     const userGuess = prompt(`pick a card: ${cards.join(",")}`);

// }










var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var r1 = document.getElementById("result")


var tabImage = ["karta01.png","karta02.png","karta03.png"]

function los() {
    for(let i=0; i<10; i++) {
        let a = Math.floor(Math.random() * tabImage.length)
        let b = Math.floor(Math.random() * tabImage.length)
        console.log(a,b)
        var tmp = tabImage[a]
        tabImage[a] = tabImage[b]
        tabImage[b] = tmp
    }
}

los()


c1.addEventListener("click",function() {
    console.log("Karta 01")
    console.log(tabImage[0])
    if (tabImage[0]=="karta03.png") {
        console.log("Wygrałeś/aś!")
        r1.innerHTML = "Wygrałeś/aś!"
    } else {
        console.log("Przegrałeś/aś!")
        r1.innerHTML = "Przegrałeś/aś!"
    }
    var image = "url(./img/" + tabImage[0] + ")"
    c1.style.backgroundImage = image
})

c2.addEventListener("click",function() {
    console.log("Karta 02")
    if (tabImage[1]=="karta03.png") {
        console.log("Wygrałeś/aś!")
        r1.innerHTML = "Wygrałeś/aś!"
    } else {
        console.log("Przegrałeś/aś!")
        r1.innerHTML = "Przegrałeś/aś!"
    }
    var image = "url(./img/" + tabImage[1] + ")"
    c2.style.backgroundImage = image
})

c3.addEventListener("click",function() {
    console.log("Karta 03")
    if (tabImage[2]=="karta03.png") {
        console.log("Wygrałeś/aś!")
        r1.innerHTML = "Wygrałeś/aś!"
    } else {
        console.log("Przegrałeś/aś!")
        r1.innerHTML = "Przegrałeś/aś!"
    }
    var image = "url(./img/" + tabImage[2] + ")"
    c3.style.backgroundImage = image
}) 