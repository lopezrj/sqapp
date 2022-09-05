document.addEventListener("DOMContentLoaded", async () => {
    let names = window.api.getNames();
    document.getElementById("names").innerHTML=names;
})

const func = async () => {
    const response = await window.api.ping()
    console.log(response) // prints out 'pong'
  }
  
func()