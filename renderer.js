document.addEventListener("DOMContentLoaded", async () => {
  // let names = await window.api.getNames();

  // document.getElementById("names").innerHTML =names;
  //let units = new Array() 
  units = await window.api.getUnits();
  unitNames = units.map((item) => {return item.Unit }).join("</td></tr><tr><td class='unitName'>")
  unitNames =  "<table class='table table-striped'>"+"<tr><td>"+unitNames
  unitNames = unitNames+"</table>"
  sendToPage(unitNames);
})


const sendToPage = (content) => {
  document.getElementById("names").innerHTML = content;
}

/*
const btn = document.getElementById('btn')
const namesElement = document.getElementById('names')

btn.addEventListener('click', async () => {

  const names = await window.api.getNames()
  console.log("Here")
  namesElement.innerText= names
})
*/