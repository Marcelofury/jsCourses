//!st Method
console.log(document.querySelector('#heading'))

//2nd method
console.log(document.getElementById("heading"))

//innerHTML
// (changing content/HTML)
document.querySelector('#heading').innerHTML=("ASAP Frontend")

//(changing CSS)
document.querySelector('#heading').style.backgroundColor="red"
document.querySelector('#heading').style.color="green"

function changeButtonColorToGreen(){
    document.querySelector("button").style.color='purple'
    console.log("change button to green")
}