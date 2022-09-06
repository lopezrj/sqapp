document.addEventListener("DOMContentLoaded", async () => {
  // let names = await window.api.getNames();

  // document.getElementById("names").innerHTML =names;
  //let units = new Array() 
  units = await window.api.getUnits();
  unitNames = units.map((item) => {return item.Unit }).join("<br />")
  console.log(unitNames)
  document.getElementById("names").innerHTML = unitNames;
})

/*
const btn = document.getElementById('btn')
const namesElement = document.getElementById('names')

btn.addEventListener('click', async () => {

  const names = await window.api.getNames()
  console.log("Here")
  namesElement.innerText= names
})


const func = async () => {
    const response = await window.api.ping()
    console.log(response) // prints out 'pong'
  }
  
func()

*/