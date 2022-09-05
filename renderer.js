document.addEventListener("DOMContentLoaded", async () => {
    let names = await window.api.getNames();
    document.getElementById("names").innerHTML =names;
})

/*
const btn = document.getElementById('btn')
const namesElement = document.getElementById('names')

btn.addEventListener('click', async () => {

  const names = await window.api.getNames()
  console.log("Here")
  namesElement.innerText= names
})
*/

const func = async () => {
    const response = await window.api.ping()
    console.log(response) // prints out 'pong'
  }
  
func()