// Connect HTML to JS
  alert("You're connected!")

// function appleChanger
//  takes an id of an apple on the HTML page from an onclick
// and changes the HTML element that the ID represents to an emoji
var missLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)
if(missLocation === bombLocation){
  bombLocation = Math.floor(Math.random()*9)
}
console.log(missLocation, bombLocation)
const targetChanger = (id) => {
  if(id === bombLocation){
    document.getElementById(id).innerHTML = "💣"
    alert("Destroyed Enemy, You Win!!")
  } else if(id === missLocation){
    document.getElementById(id).innerHTML = "😮"
    alert("Struck Friendly Target, YOU LOSE")
  } else{
    return document.getElementById(id).innerHTML = "❌"
  }
}
