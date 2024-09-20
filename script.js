let startGame = document.querySelector(".splash-screen .start-game")
let namebox = document.querySelector(".memory-block .info .name p")
let splashScreen = document.querySelector(".splash-screen")
startGame.addEventListener("click" , (e) => {
    let yourname = prompt("what is your name") ;
    if(yourname == null || yourname == "") {
        namebox.innerHTML = `unknon`
    }else {
        namebox.innerHTML = `hello : ${yourname}`
    }
    splashScreen.remove() ;
})
// randomize of cards 
document.querySelectorAll(".memory-block-content .game-block").forEach( (blocks) => {
    blocks.style = `order : ${Math.floor(Math.random() * 19)}`   
})

// flip cards 
let numberOfFlip = 0 ;
let numberofcorrect = 0 ;
let flip = [] ;
let tries = 0 ;
let triesblock = document.querySelector(".wrong-tries p")
let gameBlock = document.querySelectorAll(".memory-block-content .game-block") ;
gameBlock.forEach( (blocks) => {
    blocks.addEventListener("click" , (block) => {
        block.target.parentElement.classList.add("is-flip") ;
        numberOfFlip++;
        flip.push(block.target)
        if(numberOfFlip % 2 === 0) {
            setTimeout( verification , 1000 ,flip);
        } 
        console.log(numberofcorrect)
    })   
})

function verification (flip) {
    console.log(flip[numberOfFlip-1] , flip[numberOfFlip - 2])
    if(flip[numberOfFlip-1].parentElement.dataset.techenology != flip[numberOfFlip - 2].parentElement.dataset.techenology) {
        tries++ ;
        flip[numberOfFlip-1].parentElement.classList.remove("is-flip")
        flip[numberOfFlip-2].parentElement.classList.remove("is-flip")
        triesblock.innerHTML = `wrong tries : ${tries}`
    } else {
        numberofcorrect++ ;
    }
}

if(numberofcorrect == 10) {
    let popup = document.createElement("div") ;
    popup.className = "popup"
}