let homeScoreValue = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreValue.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreValue.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreValue.textContent = homeScore
}

let guestScoreValue = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreValue.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreValue.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreValue.textContent = guestScore
}