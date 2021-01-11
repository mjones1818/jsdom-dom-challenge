let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart =document.querySelector('#heart')
let pause =document.querySelector('#pause')
let list = document.querySelector('#list')
let likes = document.querySelector('.likes')
let comments = document.querySelector('.comments')
let commentInput = document.querySelector('#comment-form')
let lastSet
let timesLiked
let paused = false

//Time
window.setInterval(oneSecondFunction, 1000)

function oneSecondFunction() {
  if (!paused) {
    let number = counterToNumber()
    number += 1
    setCounter(number)
  }
}

//listeners
function addListeners () {
  minus.addEventListener('click', subtractOne)
  plus.addEventListener('click', addOne)
  heart.addEventListener('click', liked)
  pause.addEventListener('click', pauseGame)
  commentInput.addEventListener('click', comment)
}

function removeListeners () {
  minus.removeEventListener('click', subtractOne)
  plus.removeEventListener('click', addOne)
  heart.removeEventListener('click', liked)
  
}

addListeners()


//functions
function counterToNumber () {
  return parseInt(counter.innerText)
}

function setCounter (number) {
  counter.innerText = number.toString()
}

function subtractOne () {
  let number = counterToNumber()
  number -= 1
  setCounter(number)
}

function addOne () {
  let number = counterToNumber()
  number +=1
  setCounter(number)
}

function plural() {
  if (timesLiked == 1 || timesLiked == undefined){
    return "time"
  } else {
    return "times"
  }
}

function liked () {
  if (lastSet == `<li>${counter.innerText} has been liked ${timesLiked} ${plural()}`){
    timesLiked += 1
    lastSet = `<li>${counter.innerText} has been liked ${timesLiked} times`
    likes.innerHTML += lastSet
  } else {
    timesLiked = 1 
    lastSet = `<li>${counter.innerText} has been liked ${timesLiked} time`
    likes.innerHTML += lastSet
  }
}

function pauseGame() {
  if (pause.innerText == 'pause') {
    pause.innerText = "resume"
    paused = true
    removeListeners()
  } else {
    paused = false
    pause.innerText = "pause"
    addListeners()
  }
}

function comment (e) {
  e.preventDefault();
  if (!paused && e.target.id == 'submit') {
    let commentText = document.querySelector('#comment-input')
    debugger
    comments.innerText += `${commentText.value}`
    commentText.value = ''
  }
}

