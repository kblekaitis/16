"use strict"

// +++++++++++++++++++++++++++++++++++++++++++++++
var playerOne = document.getElementById("btnOne")
var playerTwo = document.getElementById("btnTwo")

var numberOne = document.getElementById("numOne")
var numberTwo = document.getElementById("numTwo")

numberOne.innerText = 0

// Pirmo žaidėjo
playerOne.addEventListener("click", function(){
    
    var div = document.createElement("div")
    document.body.append(div)

    var divs = document.querySelectorAll("div")
    for(var i = 0; i < divs.length; i++){
        numberOne.innerText = i+1
    }
})
// Antro žaidėjo

numberTwo.innerText = 0

playerTwo.addEventListener("click", function(){
    var span = document.createElement("span")
    document.body.append(span)

    var spans = document.querySelectorAll("span")
    for(var i = 0; i < spans.length; i++){
        numberTwo.innerText = i+1
    }
    when()
    
})

function resetCounter() {
    // numberOne = 0
    // numberTwo = 0
    numberOne.innerText = 0
    numberTwo.innerText = 0
    updateDisplay(numberOne);
    updateDisplay(numberTwo);
}

// function updateDisplay(two) {
//     document.getElementById("numTwo").innerHTML = two;
// }



// var mygOne = document.getElementById("btnOne")
// var mygTwo = document.getElementById("btnTwo")
// var displayNumberOne = document.getElementById("numOne")
// var displayNumberTwo = document.getElementById("numTwo")

// displayNumberOne.innerText = 0
// displayNumberTwo.innerText = 0

// mygOne.addEventListener("click", function(){
//     var displayNumberOne = document.getElementById("numOne").innerText
//     for(var i = 0; i < displayNumberOne.innerText; i++){

//         // Keičia display number
//         displayNumberOne.innerText = i + 1
//     }
//     }
// )

// mygTwo.addEventListener("click", function(){
//     var div = document.createElement("div")
//     document.body.append(div)

//     var divs = document.querySelectorAll("div")
//     for(var i = 0; i < divs.length; i++){
//         // Numeruoja kvadratėlius
//         divs[i].innerHTML = `<h1>${i + 1}</h1>`

//         // Keičia display number
//         displayNumberTwo.innerText = i + 1
//     }
// })


// displayNumber.innerText = 2

// prideti.addEventListener("click", function(){
//     var div = document.createElement("div")
//     div.classList.add("divStyle")
//     document.body.append(div)

//     var divs = document.querySelectorAll("div")
//     for(var i = 0; i < divs.length; i++){
//         // Numeruoja kvadratėlius
//         divs[i].innerHTML = `<h1>${i + 1}</h1>`

//         // Keičia display number
//         displayNumber.innerText = i + 1
//     }

//     // Pridėjimo animacija
//     setTimeout(function(){
//       divAnimation()
//     }, 10)
// })

