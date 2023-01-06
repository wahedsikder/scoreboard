let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let hScore = 0
let gScore = 0

// Home Score

function scoreOne(){
    hScore += 1
    homeScore.textContent = hScore
}

function scoreTwo(){
    hScore +=2
    homeScore.textContent = hScore
}

function scoreThree(){
    hScore +=3
    homeScore.textContent = hScore
}

// Guest Score

function gScoreOne(){
    gScore += 1
    guestScore.textContent = gScore
}

function gScoreTwo(){
    gScore +=2
    guestScore.textContent = gScore
}

function gScoreThree(){
    gScore +=3
    guestScore.textContent = gScore
}